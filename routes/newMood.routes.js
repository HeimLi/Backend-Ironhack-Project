const express = require("express");
const Mood = require("../models/Mood.model");
const router = express.Router();

router.post("/moods/create", (req, res, next) => {
  const { day, daytime, mood, user } = req.body;

  if (day === '' || daytime === '' || mood === '') {
    res.status(400).json({ message: "Please provide data." });
    return;
  }

  Mood.create({ day, daytime, mood, user })
    .then((createdMood) => {
      const { day, daytime, mood } = createdMood;
      const newMood = { day, daytime, mood, user };
      res.status(201).json({ mood: newMood });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

module.exports = router;