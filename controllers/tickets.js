const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

async function newTicket(req, res) {
    const tickets = await Ticket.find({}).sort('seat');
    const flight = {_id: req.params.id}
    res.render('tickets/new', { title: 'Add Ticket', tickets, flight})
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id
        await Ticket.create(req.body)
    } catch (error) {
        console.log(error)
    }
    const flight = await Flight.findById(req.params.id);
    res.redirect(`/flights/${ flight._id }`)
} 