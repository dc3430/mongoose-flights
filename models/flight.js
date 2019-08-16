var mongoose = require('mongoose');

var Schema = mongoose.Schema; //shortcut to the mongoose.Schema class


var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta', 'Continental', 'Alaska']
    },
    flightNum: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA', 'CLE', 'MSO'],
        default: 'DAL',
    },
    destination: {
        airport: {
            type: String, 
            enum: ['AUS', 'DAL', 'LAX', 'SEA', 'CLE', 'MSO']
        },
    },
    arrival: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    },
});

module.exports = mongoose.model('Flight', flightSchema);