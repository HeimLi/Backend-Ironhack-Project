    const express = require('express');
    const Mood = require('../models/Mood.model');
    const router = express.Router();

    router.get('/moods', (req, res, next) => {
    Mood.find()
        .then((moods) => res.json(moods))
        .catch((err) => next(err));
    });

    module.exports = router;