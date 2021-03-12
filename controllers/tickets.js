const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    
}


function create(req, res){
    req.body.flight = req.params.flightId;
    Ticket.create(req.body, function(err, ticket){

        // console.log(ticket)
        res.redirect(`/flights/${req.params.flightId}`);
    });
    
}

function newTicket(req, res){
    Ticket.find({}, function(err, tickets) {
        console.log(tickets, "array of tickets")
        res.render('tickets/new', {
            title: 'Add Ticket',
            flightId: req.params.id
          });
          
    })
    
}
