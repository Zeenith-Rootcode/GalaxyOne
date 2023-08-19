const router = require("express").Router();
const { getTickets, addTicket } = require("../controllers/ticketsController");

router.get("/getTicketseDetails", getTickets);
router.post("/addTicket", addTicket);

module.exports = router;
