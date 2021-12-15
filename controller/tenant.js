const Tenant = require('../models/Tenant');
exports.createTenant = (req, res, next) => {

    const tenant = new Tenant({
        ...req.body
    });
    tenant.save()
        .then(() => res.status(201).json({ message: 'locataire enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getAllTenants = (req, res, next) => {
    Tenant.find()
        .then(tenants => res.status(200).json(tenants))
        .catch(error => res.status(400).json({ error }));
};
exports.getOneTenant = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(tenant => res.status(200).json(tenant))
        .catch(error => res.status(404).json({ error }));
};
exports.updateOneTenant = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'locataire modifié !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.deleteOneTenant = (req, res, next) => {
    Thing.findOne({ _id: req.params.id }).then(
        (thing) => {
            if (!thing) {
                res.status(404).json({
                    error: new Error('No such Thing!')
                });
            }
            if (thing.userId !== req.auth.userId) {
                res.status(400).json({
                    error: new Error('Unauthorized request!')
                });
            }
            Thing.deleteOne({ _id: req.params.id }).then(
                () => {
                    res.status(200).json({
                        message: 'locataire supprimé!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }
    )
};