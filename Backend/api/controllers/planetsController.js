const bcrypt = require("bcryptjs");
const request = require("request-promise");
const Planet = require("../models/planet");

// *******************************************************************************
// ****************************** To get planets *********************************
// *******************************************************************************

exports.getPlanets = async (req, res) => {
  Planet.find()
    .then((planets) => {
      res.json({
        Error: false,
        Status: 200,
        Message: "Getting planets was succeeded",
        Planets: planets,
      });
    })
    .catch((error) => {
      res.json({
        Error: true,
        Status: 400,
        Message: "Getting planets was failed",
        Error: error,
      });
    });
};

// *******************************************************************************
// ****************************** To add planets *********************************
// ******************************************************************************
exports.addPlanet = async (req, res) => {
  const {
    name,
    attractions,
    climate,
    culture,
    attractionsDescription,
    cultureDescription,
    distanceFromPlanet,
    availablePackages,
  } = req.body;

  const planetImage = req.file.path;

  if (
    !name ||
    !attractions ||
    !climate ||
    !culture ||
    !attractionsDescription ||
    !cultureDescription ||
    !availablePackages ||
    !distanceFromPlanet ||
    !planetImage ||
    name === "" ||
    attractions === "" ||
    climate === "" ||
    culture === "" ||
    attractionsDescription === "" ||
    cultureDescription === "" ||
    availablePackages === [] ||
    distanceFromPlanet === 0
  ) {
    res.json({
      Error: true,
      Status: 400,
      Message: "Empty Values",
    });
  } else {
    let newPlanet = new Planet({
      name,
      attractions,
      culture,
      climate,
      attractionsDescription,
      cultureDescription,
      availablePackages,
      distanceFromPlanet,
      planetImage,
    });
    newPlanet
      .save()
      .then((responseFromDB) => {
        res.json({
          Error: false,
          Status: 200,
          Message: "Adding planet succeeded.",
          Planet: responseFromDB,
        });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message: "Adding planet was unsuccessful : " + error.message,
        });
      });
  }
};
