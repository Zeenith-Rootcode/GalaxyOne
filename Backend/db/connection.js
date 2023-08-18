const mongoose = require("mongoose");

const URI = "mongodb+srv://admin:admin@galaxyone.lt22kpw.mongodb.net/";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("GALAXY ONE DATABASE CONNECTION HAS BEEN SET UP!");
};

module.exports = connectDB;
