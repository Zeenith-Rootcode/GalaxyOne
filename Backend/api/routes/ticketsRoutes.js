const router = require("express").Router();
const {
  getTickets,
  addTicket,
  filterTickets,
} = require("../controllers/ticketsController");

router.get("/getTicketseDetails", getTickets);
router.post("/addTicket", addTicket);
router.post("/filterTickets", filterTickets);

module.exports = router;
