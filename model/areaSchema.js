const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    numberOfHost: {
        type: Number,
    }
});

const area = mongoose.model('area', areaSchema);

module.exports = area;