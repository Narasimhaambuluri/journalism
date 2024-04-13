const mongoose = require('mongoose');

const mschema = mongoose.Schema;

const MoodSchema = new mongoose.Schema({
    userId:{
        type: String
    },
    mood:{
        type: Number
    },
})


module.exports = mongoose.model('Mood',MoodSchema)