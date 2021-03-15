const mongoose = require('mongoose');

var Admin = mongoose.model('admin', {
    name: { type: String },
    email: { type: String },
    password: { type: String },
});

module.exports = { Admin };
