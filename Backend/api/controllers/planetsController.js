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
// *******************************************************************************
