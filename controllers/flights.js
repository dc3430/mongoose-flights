var Flight = require('../models/flight');


module.exports = {
    new: newFlights,
    create, 
    index,
    show,
    addDestination,
    // deleteFlight,
    // addTicket
}

function addDestination(req, res) {
    Flight.findById(req)
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

// function create(req, res) {
//     for(let key in req.body) {
//         if(req.body[key] === '') delete req.body[key];
//     }
//     var flight = new Flight(req.body);
//     flight.save(req.body, function(err, flight) {
//       // one way to handle errors
//     //  if (err) return res.redirect('flights/new');
//     console.log(err);
//       console.log(flight);
//       // for now, redirect right back to new.ejs
//       res.redirect('/flights');
//     });
// }

function create(req, res) {
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    Flight.create(req.body, function(err, flight) {
        console.log(flight);
        res.redirect('/flights');
    });
}



 


function newFlights(req, res) {
    //open a new form for entering a new flight
    res.render('flights/new');
}