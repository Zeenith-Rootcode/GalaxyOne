const mongoose = require("mongoose");
const packagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  costPerKM: {
    type: Number,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Packages", packagesSchema);
