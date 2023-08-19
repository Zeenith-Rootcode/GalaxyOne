const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  package: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  startingPlanet: {
    type: String,
    required: true,
  },
  startingPlanetName: {
    type: String,
    required: true,
  },
  destinationPlanet: {
    type: String,
    required: true,
  },
  destinationPlanetName: {
    type: String,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: String,
    required: true,
  },
  availableNumberOfTickets: {
    type: Number,
    required: true,
  },
  journeyDistance: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Tickets", ticketSchema);
