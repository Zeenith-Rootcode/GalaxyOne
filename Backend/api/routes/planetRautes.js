const router = require("express").Router();
const { getPlanets } = require("../controllers/planetsController");
router.get("/getPlanetsDetails", getPlanets);

module.exports = router;
