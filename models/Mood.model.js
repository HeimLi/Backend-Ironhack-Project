const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const moodSchema = new Schema({
  day: { type: String },
  daytime: { type: String },
  mood: { type: String },
  user: { type: Schema.Types.ObjectId, ref:"User" }
});

module.exports = model("Mood", moodSchema);
