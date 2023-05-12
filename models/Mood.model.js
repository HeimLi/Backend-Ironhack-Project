const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const moodSchema = new Schema({
  day: { type: String },
  daytime: { type: String },
  mood: { type: String },
  user: { type: String }
});

module.exports = model("Mood", moodSchema);
