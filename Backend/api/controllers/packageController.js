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
