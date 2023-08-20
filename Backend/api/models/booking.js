const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  ticket: {
    type: String,
    required: true,
  },
  issuedDate: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startingPlanet: {
    type: String,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  numberOfTickets: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bookings", bookingsSchema);
