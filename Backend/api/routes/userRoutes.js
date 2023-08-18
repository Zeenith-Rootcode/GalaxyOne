const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/userController");
router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
// router.post('/records',getUserRecords)
// router.post('/addAppointment',addAppointment)

module.exports = router;
