const mongoose = require('mongoose');
const tenantShemas = mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    mail: { type: String, required: false, unique: true },
    is_there: { type: Boolean, required: true, default: true },
    type_appart: { type: String, required: true },
    price: { type: Number, required: true },
    start_time: { type: Date, required: true },
    end_time_paid: { type: Date, required: true },
    end_paid: { type: Number, required: true },
    cautionStock: { type: Number, required: true },

});

module.exports = mongoose.model('Tenant', tenantShemas);