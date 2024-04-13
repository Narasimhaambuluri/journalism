const mongoose = require('mongoose');

const mschema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    email:{
        type: String
    },
    salt:{
        type: String
    },
    hash:{
        type: String
    },
    fullName:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    }
})


module.exports = mongoose.model('User',UserSchema)