const Appart = require('../models/Appart');
exports.createAppart = (req, res, next) => {

    const appart = new Appart({
        ...req.body
    });
    appart.save()
        .then(() => res.status(201).json({ message: 'appart enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getAllApparts = (req, res, next) => {
    Tenant.find()
        .then(apparts => res.status(200).json(apparts))
        .catch(error => res.status(400).json({ error }));
};
exports.getOneAppart = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(appart => res.status(200).json(appart))
        .catch(error => res.status(404).json({ error }));
};
exports.updateOneAppart = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Appart modifié !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.deleteOneAppart = (req, res, next) => {
    Appart.findOne({ _id: req.params.id }).then(
        (appart) => {
            if (!appart) {
                res.status(404).json({
                    error: new Error('No such Thing!')
                });
            }
            if (appart.userId !== req.auth.userId) {
                res.status(400).json({
                    error: new Error('Unauthorized request!')
                });
            }
            Appart.deleteOne({ _id: req.params.id }).then(
                () => {
                    res.status(200).json({
                        message: 'Appart supprimé!'
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