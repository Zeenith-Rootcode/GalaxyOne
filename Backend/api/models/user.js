const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  loginType: {
    type: String,
    required: true,
  },
  universalId: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },
  universalTel: {
    type: String,
    required: true,
  },
  homePlanet: {
    type: String,
    required: true,
  },
  homeDestrict: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Users", userSchema);
