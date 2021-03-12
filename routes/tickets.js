const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


router.get("/:id/new", ticketsCtrl.new);
router.post("/:flightId", ticketsCtrl.create);


///:flightId/addToFlight

module.exports = router;