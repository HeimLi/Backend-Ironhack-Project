const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const moodSchema = new Schema({
  day: { type: String, unique: true, required: true },
  daytime: { type: String, required: true },
  mood: { type: String, required: true },
});

module.exports = model("Mood", moodSchema);
