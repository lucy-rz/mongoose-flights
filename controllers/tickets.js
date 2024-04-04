const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

async function newTicket(req, res) {
    console.log(req)
    const tickets = await Ticket.find({}).sort('seat');
    res.render('tickets/new', { title: 'Add Ticket', tickets})
}

async function create(req, res) {
    try {
        await Ticket.create(req.body)
    } catch (error) {
        console.log(error)
    }
    const flight = await Flight.findById(req.params.id);
    res.redirect(`/flights/${ flight._id }`)
} 