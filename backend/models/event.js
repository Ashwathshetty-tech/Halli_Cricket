const mongoose = require('mongoose');

var Event = mongoose.model('Event', {
    name: { type: String },
    place: { type: String },
    organizer: { type: String },
    contact: { type: String },
    poster:{type:String},
    picker:{type:String}
});

module.exports = { Event };
