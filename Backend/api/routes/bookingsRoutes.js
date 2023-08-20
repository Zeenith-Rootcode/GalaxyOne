const router = require("express").Router();
const {
  addBooking,
  payForBooking,
  getBookingsOfUser,
  getRecentPlanetsOfUser,
} = require("../controllers/bookingController");

router.post("/addBooking", addBooking);
router.post("/payForBooking", payForBooking);
router.post("/getBookingsOfUser", getBookingsOfUser);
router.post("/getRecentPlanetsOfUser", getRecentPlanetsOfUser);
module.exports = router;
