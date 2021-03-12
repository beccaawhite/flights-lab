const Flight = require('../models/flight');


module.exports = {
  add, 
  show
};

function add(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.destinations.push(req.body);
    console.log(req.body, " WE AT REQ>BODY")
    flight.save(function(err) {
        console.log(flight)
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', {
            flight: flight
        });
    });
}
