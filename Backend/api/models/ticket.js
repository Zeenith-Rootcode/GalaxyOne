const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  package: {
    type: String,
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
