const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['CDG', 'KEF', 'HAM', 'LON', 'NRT'],
    },
    arrival: {
        type: Date,
    },
});


const flightSchema = new mongoose.Schema({
    airline: { 
        type: String, 
        enum: ['Air France', 'Icelandair', 'Lufthansa', 'British Airways', 'Ana'], 
    },
    airport: {
        type: String,
        enum: ['CDG', 'KEF', 'HAM', 'LON', 'NRT'],
        default: 'CDG',
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departure: {
        type: Date,
        default: function() {
            const oneYearPlus = new Date();
            oneYearPlus.setFullYear(oneYearPlus.getFullYear() + 1);
            return oneYearPlus
          },
    },
    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);