const bcrypt = require("bcryptjs");
const request = require("request-promise");
const Packages = require("../models/package");
const Planets = require("../models/planet");
const planet = require("../models/planet");

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
        Error: "Getting packages was failed : " + error.message,
      });
    });
};

// *******************************************************************************
// *************************** To get packages with cost**************************
// *******************************************************************************

function calculateCost(distaceToSorce, distanceToDestination, costPerKM) {
  const distanceAB = Math.abs(distaceToSorce, -distanceToDestination);
  return distanceAB * costPerKM;
}
function getPackageDetailsForPlanet(
  singleAvailablePackage,
  startingPlanet,
  destinationPlanet
) {
  return new Promise((resolve, reject) => {
    Packages.findById(singleAvailablePackage).then((packageDetails) => {
      let cost = calculateCost(
        startingPlanet.distanceFromPlanet,
        destinationPlanet.distanceFromPlanet,
        packageDetails.costPerKM
      );
      resolve({
        packageName: packageDetails.name,
        featues: packageDetails.features,
        cost: cost,
      });
    });
  });
}

function getPackagesForPlanet(singlePlanetFromDB, startingPlanet) {
  return new Promise((resolve, reject) => {
    if (
      JSON.stringify(singlePlanetFromDB._id) !==
      JSON.stringify(startingPlanet._id)
    ) {
      console.log("Starting : ", JSON.stringify(startingPlanet._id));
      console.log("DESTINATION : ", singlePlanetFromDB._id);
      let availablePackagesForPlanet = singlePlanetFromDB.availablePackages;
      Promise.all(
        availablePackagesForPlanet.map((singleAvailablePackage) => {
          return getPackageDetailsForPlanet(
            singleAvailablePackage,
            startingPlanet,
            singlePlanetFromDB
          );
        })
      ).then((resultedPackageDetails) => {
        resolve({
          StartingPlanetName: startingPlanet.name,
          StartingPlanetId: startingPlanet._id,
          DestinationPlanetName: singlePlanetFromDB.name,
          DestinationPlanetId: singlePlanetFromDB._id,
          PackagesOfPlanet: resultedPackageDetails,
        });
      });
    } else {
      resolve({
        StartingPlanetName: startingPlanet.name,
        StartingPlanetId: startingPlanet._id,
        DestinationPlanetName: singlePlanetFromDB.name,
        DestinationPlanetId: singlePlanetFromDB._id,
        PackagesOfPlanet: [],
      });
    }
  });
}

exports.getPackagesWithCalculatedCost = async (req, res) => {
  const { startingLocation } = req.body;

  if (!startingLocation || startingLocation === "") {
    res.json({
      Error: true,
      Status: 400,
      Message: "Invalid Starting Planet",
    });
  } else {
    Planets.findById(startingLocation)
      .then((startingPlanet) => {
        Planets.find()
          .then((planetsFromDB) => {
            Promise.all(
              planetsFromDB.map((singlePlanetFromDB) => {
                return getPackagesForPlanet(singlePlanetFromDB, startingPlanet);
              })
            ).then((packagesOfThePlanet) => {
              res.json({
                Error: false,
                Status: 200,
                Message: "Getting packages with cost was succeeded",
                Packages: packagesOfThePlanet,
              });
            });
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Error: "Getting packages was failed : " + error.message,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Error:
            "Getting starting planet details was failed : " + error.message,
        });
      });
  }
};
