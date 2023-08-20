const mongoose = require("mongoose");

const paymentsSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  booking: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Payments", paymentsSchema);
