const express = require('express');
const mongoose = require('mongoose');
const appRoute = require("./routes/routetest");
const userRoutes = require("./routes/user");
const tenantRoutes = require("./routes/tenant");
const appartRoutes = require("./routes/appart");


mongoose.connect('mongodb+srv://wkdev:123Codez@cluster0.hqp5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/api/auth', userRoutes);
app.use('/api', appRoute);
app.use('/api/tenant', tenantRoutes);
app.use('/api/appart', appartRoutes);





module.exports = app;