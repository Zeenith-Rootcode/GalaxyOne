const multer = require("multer");
const router = require("express").Router();
const { getPlanets, addPlanet } = require("../controllers/planetsController");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); // Define the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Define how the file should be named
  },
});

const upload = multer({ storage: storage });

router.get("/getPlanetsDetails", getPlanets);
router.post("/addPlanet", upload.single("planetImage"), addPlanet);

module.exports = router;
