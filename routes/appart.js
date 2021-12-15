const express = require('express')
const routerAppart = express.Router();
const appartCtrler = require('../controller/appart');
const auth = require('../middleware/auth')

routerAppart.post('/', auth, appartCtrler.createAppart);
routerAppart.get('/', auth, appartCtrler.getAllApparts);
routerAppart.get('/:id', auth, appartCtrler.getOneAppart);
routerAppart.put('/:id', auth, appartCtrler.updateOneAppart);
routerAppart.delete('/:id', auth, appartCtrler.deleteOneAppart);

module.exports = routerAppart