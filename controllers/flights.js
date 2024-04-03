const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
    try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render('flights/show', { title: 'Flight Detail', flight, tickets });
    }
    catch (error) {
        console.log(error)
    }
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight', errorMsg: ''});
}

async function create(req, res) {
    req.body.departure = req.body.departure.toString()
    console.log(req.body)
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } 
    catch (error) {
        console.log(error)
        res.render('flights/new', {errorMsg: error.message})        
    }
}