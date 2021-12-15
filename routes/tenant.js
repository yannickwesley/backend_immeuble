const express = require('express')
const routerTenant = express.Router();
const tenantCtrler = require('../controller/tenant');
const auth = require('../middleware/auth')

routerTenant.post('/', auth, tenantCtrler.createTenant);
routerTenant.get('/', auth, tenantCtrler.getAllTenants);
routerTenant.get('/:id', auth, tenantCtrler.getOneTenant);
routerTenant.put('/:id', auth, tenantCtrler.updateOneTenant);
routerTenant.delete('/:id', auth, tenantCtrler.deleteOneTenant);

module.exports = routerTenant