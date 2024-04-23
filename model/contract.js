const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    price: {
        type: Number,
    },
    deposit: {
        type: Number,
    },
    status: {
        type: String,
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    dateOfContract: {
        type:Date,
    }
});

const contract = mongoose.model('area', contractSchema);

module.exports = contract;