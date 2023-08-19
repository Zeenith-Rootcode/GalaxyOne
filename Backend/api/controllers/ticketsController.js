const bcrypt = require("bcryptjs");
const request = require("request-promise");
const Tickets = require("../models/ticket");
const Packages = require("../models/package");
const Planets = require("../models/planet");

// *******************************************************************************
// ****************************** To get tickets *********************************
// *******************************************************************************

exports.getTickets = async (req, res) => {
  Packages.find()
    .then((packages) => {
      res.json({
        Error: false,
        Status: 200,
        Message: "Getting tickets was succeeded",
        Packages: packages,
      });
    })
    .catch((error) => {
      res.json({
        Error: true,
        Status: 400,
        Message: "Getting tickets was failed : " + error.message,
      });
    });
};

// *******************************************************************************
// ****************************** To add tickets *********************************
// *******************************************************************************

function calculateCost(journeyDistance, costPerKM) {
  return journeyDistance * costPerKM;
}
function calculateDistance(distaceToSorce, distanceToDestination, costPerKM) {
  const distanceAB = Math.abs(distaceToSorce, -distanceToDestination);
  return distanceAB;
}

exports.addTicket = async (req, res) => {
  const {
    packageId,
    startingPlanet,
    destinationPlanet,
    departureDate,
    arrivalDate,
    availableNumberOfTickets,
  } = req.body;

  if (
    !packageId ||
    !startingPlanet ||
    !destinationPlanet ||
    !departureDate ||
    !arrivalDate ||
    !availableNumberOfTickets ||
    packageId === "" ||
    startingPlanet === "" ||
    destinationPlanet === "" ||
    departureDate === "" ||
    arrivalDate === ""
  ) {
    res.json({
      Error: true,
      Status: 400,
      Message: "Empty Values",
    });
  } else {
    Packages.findById(packageId)
      .then((package) => {
        Planets.findById(startingPlanet)
          .then((startingPlanetDetails) => {
            Planets.findById(destinationPlanet)
              .then((destinationPlanetDetails) => {
                let journeyDistance = calculateDistance(
                  startingPlanetDetails.distanceFromPlanet,
                  destinationPlanetDetails.distanceFromPlanet
                );

                let price = calculateCost(journeyDistance, package.costPerKM);
                let newTicket = new Tickets({
                  package: package._id,
                  packageName: package.name,
                  startingPlanet: startingPlanetDetails._id,
                  startingPlanetName: startingPlanetDetails.name,
                  destinationPlanet: destinationPlanetDetails._id,
                  destinationPlanetName: destinationPlanetDetails.name,
                  departureDate: departureDate,
                  arrivalDate: arrivalDate,
                  availableNumberOfTickets: availableNumberOfTickets,
                  journeyDistance: journeyDistance,
                  price: price,
                });
                newTicket.save().then((resultAfterSaving) => {
                  res.json({
                    Error: false,
                    Status: 200,
                    Message: "Adding ticket succeeded.",
                    Ticket: resultAfterSaving,
                  });
                });
              })
              .catch((error) => {
                res.json({
                  Error: true,
                  Status: 400,
                  Message: "Adding ticket was failed : " + error.message,
                  Error: error,
                });
              });
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Message: "Adding ticket was failed : " + error.message,
              Error: error,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message: "Adding ticket was failed : " + error.message,
          Error: error,
        });
      });
  }
};

// *******************************************************************************
// ***************************** To filter tickets *******************************
// *******************************************************************************
exports.filterTickets = async (req, res) => {
  const { destinationPlanet, startingPlanet, packageId, departureDate } =
    req.body;

  console.log(packageId, startingPlanet, destinationPlanet, departureDate);
  if (!startingPlanet || startingPlanet === "") {
    res.json({
      Error: true,
      Status: 400,
      Message: "Starting planet must be given",
    });
  } else {
    let filterObject;
    if (destinationPlanet === undefined && departureDate === undefined) {
      filterObject = { startingPlanet: startingPlanet, package: packageId };
      Tickets.find(filterObject)
        .then((tickets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Filtering tickets was succeeded",
            Tickets: tickets,
          });
        })
        .catch((error) => {
          res.json({
            Error: true,
            Status: 400,
            Message: "Getting tickets was failed : " + error.message,
          });
        });
    } else if (packageId === undefined && destinationPlanet === undefined) {
      filterObject = {
        startingPlanet: startingPlanet,
        departureDate: departureDate,
      };
      Tickets.find(filterObject)
        .then((tickets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Filtering tickets was succeeded",
            Tickets: tickets,
          });
        })
        .catch((error) => {
          res.json({
            Error: true,
            Status: 400,
            Message: "Getting tickets was failed : " + error.message,
          });
        });
    } else if (packageId === undefined && departureDate === undefined) {
      filterObject = {
        startingPlanet: startingPlanet,
        destinationPlanet: destinationPlanet,
      };
      Tickets.find(filterObject)
        .then((tickets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Filtering tickets was succeeded",
            Tickets: tickets,
          });
        })
        .catch((error) => {
          res.json({
            Error: true,
            Status: 400,
            Message: "Getting tickets was failed : " + error.message,
          });
        });
    } else if (departureDate === undefined) {
      filterObject = {
        startingPlanet: startingPlanet,
        package: packageId,
        destinationPlanet: destinationPlanet,
      };

      Tickets.find(filterObject)
        .then((tickets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Filtering tickets was succeeded",
            Tickets: tickets,
          });
        })
        .catch((error) => {
          res.json({
            Error: true,
            Status: 400,
            Message: "Getting tickets was failed : " + error.message,
          });
        });
    } else if (packageId === undefined) {
      filterObject = {
        startingPlanet: startingPlanet,
        destinationPlanet: destinationPlanet,
        departureDate: departureDate,
      };
      Tickets.find(filterObject)
        .then((tickets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Filtering tickets was succeeded",
            Tickets: tickets,
          });
        })
        .catch((error) => {
          res.json({
            Error: true,
            Status: 400,
            Message: "Getting tickets was failed : " + error.message,
          });
        });
    } else if (destinationPlanet === undefined) {
      filterObject = {
        startingPlanet: startingPlanet,
        package: packageId,
        departureDate: departureDate,
      };
      Tickets.find(filterObject)
        .then((tickets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Filtering tickets was succeeded",
            Tickets: tickets,
          });
        })
        .catch((error) => {
          res.json({
            Error: true,
            Status: 400,
            Message: "Getting tickets was failed : " + error.message,
          });
        });
    } else {
      filterObject = {
        startingPlanet: startingPlanet,
        package: packageId,
        destinationPlanet: destinationPlanet,
        departureDate: departureDate,
      };

      Tickets.find(filterObject)
        .then((tickets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Filtering tickets was succeeded",
            Tickets: tickets,
          });
        })
        .catch((error) => {
          res.json({
            Error: true,
            Status: 400,
            Message: "Getting tickets was failed : " + error.message,
          });
        });
    }
  }
};
