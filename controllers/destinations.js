const Flight = require('../models/flight');

module.exports = {
    create,
};

async function create(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);    
        flight.destinations.push(req.body)
        await flight.save();
        res.redirect(`/flights/${flight._id}`);  
    } 
    catch (error) {
        console.log('error: ', error);
        res.render('error', { error });
    }
};