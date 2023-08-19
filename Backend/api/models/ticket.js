const mongoose = require("mongoose");
const Packages = require("./package");

const ticketSchema = new mongoose.Schema({
  package: {
    type: Packages,
    required: true,
  },
  startingPlanet: {
    type: String,
    required: true,
  },
  destinationPlanet: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Tickets", ticketSchema);
