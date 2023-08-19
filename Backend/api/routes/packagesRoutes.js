const router = require("express").Router();
const {
  getPackages,
  getPackagesWithCalculatedCost,
  getPackagesForSpecificDestination,
  getPackagesWithTravelMode,
} = require("../controllers/packageController");

router.get("/getPackageDetails", getPackages);
// router.post("/getPackagesForAllDestinations", getPackagesWithCalculatedCost);
// router.post(
//   "/getPackagesForSpecificDestination",
//   getPackagesForSpecificDestination
// );
// router.post("/getPackagesWithTravelMode", getPackagesWithTravelMode);

module.exports = router;
