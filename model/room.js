const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    number: {
        type: Number,
    },
    status: {
        type: String,
    },
    price: {
        type: Number,
    },
    size: {
        type: Number,
        width: {
            type: Number,
        },
        height: {
            type: Number,
        }
    },
    maximumOccupancy:{
        type: Number,
    },
    description: {
        type: String,
    }
});

const room = mongoose.model('room', roomSchema);

module.exports = room;