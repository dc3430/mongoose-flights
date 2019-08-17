var Flight = require('../models/flight');


module.exports = {
    new: newFlights,
    create, 
    index,
    show,
    // addDestination,
    // deleteFlight,
    // addTicket
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (err) return res.redirect('flights/new');
        console.log(flight);
        res.render('flights/show', { title: 'Flight Detail', flight });
      });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    })
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      //if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

function newFlights(req, res) {
    //open a new form for entering a new flight
    res.render('flights/new');
}