const Flight = require('../models/movie');

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
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight', errorMsg: ''});
}

// async function create(req, res) {
//     req.body.
// }