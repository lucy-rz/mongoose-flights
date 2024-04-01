// require the mongoose module

const mongoose = require('mongoose');

// establish connection to mongodb
mongoose.connect(process.env.DATABASE_URL);

// set up connected event listeners

// shorcut variable
const db = mongoose.connection

// event listener
db.on('connected', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})