const bcrypt = require("bcryptjs");
const request = require("request-promise");
const Packages = require("../models/package");
const Planets = require("../models/planet");

// *******************************************************************************
// ****************************** To get packages ********************************
// *******************************************************************************

exports.getPackages = async (req, res) => {
  Packages.find()
    .then((packages) => {
      res.json({
        Error: false,
        Status: 200,
        Message: "Getting packages was succeeded",
        Packages: packages,
      });
    })
    .catch((error) => {
      res.json({
        Error: true,
        Status: 400,
        Message: "Getting packages was failed : " + error.message,
      });
    });
};

// // *******************************************************************************
// // ******************* To get packages for all destinations **********************
// // *******************************************************************************

// function calculateCost(distaceToSorce, distanceToDestination, costPerKM) {
//   const distanceAB = Math.abs(distaceToSorce, -distanceToDestination);
//   return distanceAB * costPerKM;
// }
// function getPackageDetailsForPlanet(
//   singleAvailablePackage,
//   startingPlanet,
//   destinationPlanet
// ) {
//   return new Promise((resolve, reject) => {
//     Packages.findById(singleAvailablePackage).then((packageDetails) => {
//       let cost = calculateCost(
//         startingPlanet.distanceFromPlanet,
//         destinationPlanet.distanceFromPlanet,
//         packageDetails.costPerKM
//       );
//       resolve({
//         packageId: packageDetails._id,
//         packageName: packageDetails.name,
//         featues: packageDetails.features,
//         cost: cost,
//       });
//     });
//   });
// }

// function getPackagesForPlanet(singlePlanetFromDB, startingPlanet) {
//   return new Promise((resolve, reject) => {
//     if (
//       JSON.stringify(singlePlanetFromDB._id) !==
//       JSON.stringify(startingPlanet._id)
//     ) {
//       console.log("Starting : ", JSON.stringify(startingPlanet._id));
//       console.log("DESTINATION : ", singlePlanetFromDB._id);
//       let availablePackagesForPlanet = singlePlanetFromDB.availablePackages;
//       Promise.all(
//         availablePackagesForPlanet.map((singleAvailablePackage) => {
//           return getPackageDetailsForPlanet(
//             singleAvailablePackage,
//             startingPlanet,
//             singlePlanetFromDB
//           );
//         })
//       ).then((resultedPackageDetails) => {
//         resolve({
//           StartingPlanetName: startingPlanet.name,
//           StartingPlanetId: startingPlanet._id,
//           DestinationPlanetName: singlePlanetFromDB.name,
//           DestinationPlanetId: singlePlanetFromDB._id,
//           PackagesOfPlanet: resultedPackageDetails,
//         });
//       });
//     } else {
//       resolve({
//         StartingPlanetName: startingPlanet.name,
//         StartingPlanetId: startingPlanet._id,
//         DestinationPlanetName: singlePlanetFromDB.name,
//         DestinationPlanetId: singlePlanetFromDB._id,
//         PackagesOfPlanet: [],
//       });
//     }
//   });
// }

// exports.getPackagesWithCalculatedCost = async (req, res) => {
//   const { startingLocation } = req.body;

//   if (!startingLocation || startingLocation === "") {
//     res.json({
//       Error: true,
//       Status: 400,
//       Message: "Invalid Starting Planet",
//     });
//   } else {
//     Planets.findById(startingLocation)
//       .then((startingPlanet) => {
//         Planets.find()
//           .then((planetsFromDB) => {
//             Promise.all(
//               planetsFromDB.map((singlePlanetFromDB) => {
//                 return getPackagesForPlanet(singlePlanetFromDB, startingPlanet);
//               })
//             ).then((packagesOfThePlanet) => {
//               res.json({
//                 Error: false,
//                 Status: 200,
//                 Message: "Getting packages with cost was succeeded",
//                 Packages: packagesOfThePlanet,
//               });
//             });
//           })
//           .catch((error) => {
//             res.json({
//               Error: true,
//               Status: 400,
//               Message: "Getting packages was failed : " + error.message,
//             });
//           });
//       })
//       .catch((error) => {
//         res.json({
//           Error: true,
//           Status: 400,
//           Message:
//             "Getting starting planet details was failed : " + error.message,
//         });
//       });
//   }
// };

// // ***************************************************************************************************
// // ****** To get packages with cost for specific destination and specific starting location **********
// // ***************************************************************************************************

// exports.getPackagesForSpecificDestination = async (req, res) => {
//   const { startingLocation, destinationLocation } = req.body;

//   if (
//     !startingLocation ||
//     startingLocation === "" ||
//     !destinationLocation ||
//     destinationLocation === ""
//   ) {
//     res.json({
//       Error: true,
//       Status: 400,
//       Message: "Invalid Starting Planet or Destination Planet",
//     });
//   } else {
//     Planets.findById(startingLocation)
//       .then((startingPlanet) => {
//         Planets.findById(destinationLocation)
//           .then((destinationPlanet) => {
//             if (
//               JSON.stringify(destinationPlanet._id) !==
//               JSON.stringify(startingPlanet._id)
//             ) {
//               let availablePackagesForPlanet =
//                 destinationPlanet.availablePackages;
//               Promise.all(
//                 availablePackagesForPlanet.map((singleAvailablePackage) => {
//                   return getPackageDetailsForPlanet(
//                     singleAvailablePackage,
//                     startingPlanet,
//                     destinationPlanet
//                   );
//                 })
//               )
//                 .then((resultedPackageDetails) => {
//                   res.json({
//                     Error: false,
//                     Status: 200,
//                     Message: "Getting packages was succeeded ",
//                     Packages: {
//                       StartingPlanetName: startingPlanet.name,
//                       StartingPlanetId: startingPlanet._id,
//                       DestinationPlanetName: destinationPlanet.name,
//                       DestinationPlanetId: destinationPlanet._id,
//                       PackagesOfPlanet: resultedPackageDetails,
//                     },
//                   });
//                 })
//                 .catch((error) => {
//                   res.json({
//                     Error: true,
//                     Status: 400,
//                     Message:
//                       "Getting packages for the destination was failed : " +
//                       error.message,
//                   });
//                 });
//             } else {
//               res.json({
//                 Error: true,
//                 Status: 400,
//                 Message: "Same planet for starting location and destination.",
//               });
//             }
//           })
//           .catch((error) => {
//             res.json({
//               Error: true,
//               Status: 400,
//               Message: "Getting packages was failed : " + error.message,
//             });
//           });
//       })
//       .catch((error) => {
//         res.json({
//           Error: true,
//           Status: 400,
//           Message:
//             "Getting starting planet details was failed : " + error.message,
//         });
//       });
//   }
// };

// // ***************************************************************************************************
// // ********************* To get packages with  specific travel mode **********************************
// // ***************************************************************************************************
// function getPackagesForPlanetWithTravelMode(
//   singlePlanetFromDB,
//   startingPlanet,
//   travelMode
// ) {
//   return new Promise((resolve, reject) => {
//     console.log();
//     if (
//       JSON.stringify(singlePlanetFromDB._id) !==
//       JSON.stringify(startingPlanet._id)
//     ) {
//       let availablePackagesForPlanet = singlePlanetFromDB.availablePackages;
//       let isPackageAvailable = false;
//       availablePackagesForPlanet.map((singleAvailablePackage) => {
//         if (singleAvailablePackage === travelMode) {
//           isPackageAvailable = true;
//         }
//       });

//       if (isPackageAvailable) {
//         Packages.findById(travelMode).then((packageDetails) => {
//           let cost = calculateCost(
//             startingPlanet.distanceFromPlanet,
//             singlePlanetFromDB.distanceFromPlanet,
//             packageDetails.costPerKM
//           );
//           resolve({
//             StartingPlanetName: startingPlanet.name,
//             StartingPlanetId: startingPlanet._id,
//             DestinationPlanetName: singlePlanetFromDB.name,
//             DestinationPlanetId: singlePlanetFromDB._id,
//             packageName: packageDetails.name,
//             featues: packageDetails.features,
//             cost: cost,
//           });
//         });
//       } else {
//         resolve(null);
//       }
//     } else {
//       resolve(null);
//     }
//   });
// }

// exports.getPackagesWithTravelMode = async (req, res) => {
//   const { startingLocation, travelMode, destinationLocation } = req.body;

//   if (!startingLocation || travelMode === "") {
//     res.json({
//       Error: true,
//       Status: 400,
//       Message: "Invalid Starting Planet",
//     });
//   } else {
//     if (!destinationLocation || destinationLocation === "") {
//       Planets.findById(startingLocation)
//         .then((startingPlanet) => {
//           Planets.find()
//             .then((planetsFromDB) => {
//               Promise.all(
//                 planetsFromDB.map((singlePlanetFromDB) => {
//                   return getPackagesForPlanetWithTravelMode(
//                     singlePlanetFromDB,
//                     startingPlanet,
//                     travelMode
//                   );
//                 })
//               ).then((packagesOfThePlanet) => {
//                 res.json({
//                   Error: false,
//                   Status: 200,
//                   Message: "Getting packages with cost was succeeded",
//                   Packages: packagesOfThePlanet,
//                 });
//               });
//             })
//             .catch((error) => {
//               res.json({
//                 Error: true,
//                 Status: 400,
//                 Message: "Getting packages was failed : " + error.message,
//               });
//             });
//         })
//         .catch((error) => {
//           res.json({
//             Error: true,
//             Status: 400,
//             Message:
//               "Getting starting planet details was failed : " + error.message,
//           });
//         });
//     } else {
//       Planets.findById(startingLocation)
//         .then((startingPlanet) => {
//           Planets.findById(destinationLocation)
//             .then((destinationPlanet) => {
//               if (
//                 JSON.stringify(destinationPlanet._id) !==
//                 JSON.stringify(startingPlanet._id)
//               ) {
//                 let availablePackagesForPlanet =
//                   destinationPlanet.availablePackages;

//                 let packageFound = false;
//                 availablePackagesForPlanet.map((singleAvailablePackage) => {
//                   if (singleAvailablePackage === travelMode) {
//                     Packages.findById(travelMode)
//                       .then((resultedPackageDetails) => {
//                         let cost = calculateCost(
//                           startingPlanet.distanceFromPlanet,
//                           destinationPlanet.distanceFromPlanet,
//                           resultedPackageDetails.costPerKM
//                         );

//                         res.json({
//                           Error: false,
//                           Status: 200,
//                           Message: "Getting packages was succeeded ",
//                           Packages: {
//                             StartingPlanetName: startingPlanet.name,
//                             StartingPlanetId: startingPlanet._id,
//                             DestinationPlanetName: destinationPlanet.name,
//                             DestinationPlanetId: destinationPlanet._id,
//                             packageName: resultedPackageDetails.name,
//                             featues: resultedPackageDetails.features,
//                             cost: cost,
//                           },
//                         });
//                       })
//                       .catch((error) => {
//                         res.json({
//                           Error: true,
//                           Status: 400,
//                           Message:
//                             "Getting packages was failed : " + error.message,
//                         });
//                       });
//                   }
//                 });

//                 if (!packageFound) {
//                   res.json({
//                     Error: true,
//                     Status: 400,
//                     Message:
//                       "There is no trip the destination with specific travel mode.",
//                   });
//                 }
//               } else {
//                 res.json({
//                   Error: true,
//                   Status: 400,
//                   Message: "Same planet for starting location and destination.",
//                 });
//               }
//             })
//             .catch((error) => {
//               res.json({
//                 Error: true,
//                 Status: 400,
//                 Message: "Getting packages was failed : " + error.message,
//               });
//             });
//         })
//         .catch((error) => {
//           res.json({
//             Error: true,
//             Status: 400,
//             Message:
//               "Getting starting planet details was failed : " + error.message,
//           });
//         });
//     }
//   }
// };
