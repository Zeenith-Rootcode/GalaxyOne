const mongoose = require("mongoose");
const planetsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  climate: {
    type: String,
    required: true,
  },
  attractions: {
    type: String,
    required: true,
  },
  culture: {
    type: String,
    required: true,
  },
  attractionsDescription: {
    type: String,
    required: true,
  },
  cultureDescription: {
    type: String,
    required: true,
  },
  planetImage: {
    type: String,
    required: true,
  },
  distanceFromPlanet: {
    type: Number,
    required: true,
  },
  availablePackages: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Planets", planetsSchema);
