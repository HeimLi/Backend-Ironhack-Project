const express = require('express');
const User = require('../models/User.model');
const router = express.Router();

router.put('/api', (req, res, next) => {
  const { email } = req.body; 

  User.findByIdAndUpdate(req.user.id, { email }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'Benutzer nicht gefunden' });
      }
      res.json(user);   
    })
    .catch((err) => next(err));
});

module.exports = router;
