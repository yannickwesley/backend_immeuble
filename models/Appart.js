const mongoose = require('mongoose');
const appartShemas = mongoose.Schema({
    type_appart: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },

});

module.exports = mongoose.model('Apart', appartShemas);