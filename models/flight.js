var mongoose = require('mongoose');

//shortcut to the mongoose.Schema class
var Schema = mongoose.Schema; 

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        require: true,
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
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'DAL',
    },
}, { timestamps: true });

//var destinationSchema = new Schema({
//     airport: {
//         type: String, 
//         enum: ['AUS', 'DAL', 'LAX', 'SEA']
//     },
// };
// arrival: {
//     type: Date,
//     default: function() {
//         return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
//     },
// },

module.exports = mongoose.model('Flight', flightSchema);