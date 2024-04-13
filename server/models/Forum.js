const mongoose = require('mongoose');

const mschema = mongoose.Schema;

const ForumPostSchema = new mongoose.Schema({
    userId:{
        type: String
    },
    title:{
        type: String
    },
    image:{
        type: String
    },
    content:{
        type: String
    },
    createdAt:{
        type: String
    },
})


module.exports = mongoose.model('Post',ForumPostSchema)