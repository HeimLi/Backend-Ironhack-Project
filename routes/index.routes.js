const router = require("express").Router();
const User = require("../models/User.model");
const Mood = require("../models/Mood.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.put('/mood/:id/user', (req, res, next) => {
  const { user } = req.body;
  const { id } = req.params;

Mood.findByIdAndUpdate(id, { user }, { new: true })
    .then((mood) => {
      if (!mood) {
        return res.status(404).json({ message: 'Mood nicht gefunden' });
      }
      res.json(mood);
    })
    .catch((err) => next(err));
});

router.put('/user/:id/email', (req, res, next) => {
  const { email } = req.body;
  const { id } = req.params;

  User.findByIdAndUpdate(id, { email }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'Benutzer nicht gefunden' });
      }
      res.json(user);
    })
    .catch((err) => next(err));
});

module.exports = router;
