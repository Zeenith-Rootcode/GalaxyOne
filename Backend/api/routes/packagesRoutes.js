const router = require("express").Router();
const {
  getPackages,
  getPackagesWithCalculatedCost,
} = require("../controllers/packageController");

router.get("/getPackageDetails", getPackages);
router.post("/getPackagesWithCosts", getPackagesWithCalculatedCost);

module.exports = router;
