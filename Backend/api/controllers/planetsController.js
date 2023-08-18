const bcrypt = require("bcryptjs");
const request = require("request-promise");
const Planet = require("../models/planet");

// *******************************************************************************
// ****************************** To get a planet ********************************
// *******************************************************************************

exports.getPlanets = async (req, res) => {
  Planet.find()
    .then((planets) => {
      res.json({
        Error: false,
        Status: 200,
        Planets: planets,
      });
    })
    .catch((error) => {
      res.json({
        Error: true,
        Status: 400,
        Error: error,
      });
    });
};
