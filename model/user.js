const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    phone : {
        type: Number,
    },
    address: {
        type: String,
    },
    role: {
        type:String,
        default: 'renter',
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;