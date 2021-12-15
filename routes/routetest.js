const express = require('express')
const routerTest = express.Router();

routerTest.get('/test', (req, res, next) => {
    res.status(200).send('test ok');
});

module.exports = routerTest;