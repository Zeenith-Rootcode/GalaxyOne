const bcrypt = require("bcryptjs");
const request = require("request-promise");
const Planet = require("../models/planet");
const Packages = require("../models/package");

// *******************************************************************************
// ****************************** To get planets *********************************
// *******************************************************************************
function getPackageDetails(package) {
  return new Promise((resolve, reject) => {
    Packages.findById(package)
      .then((packageFromDB) => {
        resolve(packageFromDB);
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message: "Getting planets was failed",
          Error: error,
        });
      });
  });
}
function getPlanetDetails(planetFromDB) {
  return new Promise((resolve, reject) => {
    let availablePackages = planetFromDB.availablePackages;
    Promise.all(
      availablePackages.map((package) => {
        return getPackageDetails(package);
      })
    )
      .then((packageDetails) => {
        resolve({
          planetDetails: planetFromDB,
          availablePackages: packageDetails,
        });
      })
      .catch((error) => {
        reject({
          Error: true,
          Status: 400,
          Message: "Getting planets was failed",
          Error: error,
        });
      });
  });
}

exports.getPlanets = async (req, res) => {
  Planet.find()
    .then((planets) => {
      Promise.all(
        planets.map((planetFromDB) => {
          return getPlanetDetails(planetFromDB);
        })
      )
        .then((responseFromAllPlanets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Getting planets was succeeded",
            Planets: responseFromAllPlanets,
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
// *********************** To get  popular planets *******************************
// *******************************************************************************

exports.getPopularPlanets = async (req, res) => {
  Planet.find()
    .sort({ reviewScore: -1 })
    .limit(10)
    .then((planets) => {
      Promise.all(
        planets.map((planetFromDB) => {
          return getPlanetDetails(planetFromDB);
        })
      )
        .then((responseFromAllPlanets) => {
          res.json({
            Error: false,
            Status: 200,
            Message: "Getting planets was succeeded",
            Planets: responseFromAllPlanets,
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
