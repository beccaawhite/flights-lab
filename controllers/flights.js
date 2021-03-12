const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    index,
    create,
    show,
  
};


// displays 
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
       
        Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log(tickets, "array of tickets")
            res.render('flights/show', { title: 'Flight Info', flight, tickets });
        });
    });
 }


function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 4);
    res.render("flights/new", {departsDate})
}

function index(req, res) {
    Flight.find({}, function(err, flightDocuments) {
      res.render('flights/index', {
           flights: flightDocuments
        });
    });
}

function create(req, res){
    
    req.body.nowFlying = !!req.body.nowFlying;
    let dt = new Flight().departs;
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    if(!req.body.departs){
        req.body.departs = dt;
    }
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.render("flights/new");
        res.redirect("/flights");
    })
}

