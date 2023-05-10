const { Schema, model } = require("mongoose");

const moodSchema = new Schema(
    {
      day: {
        type: String,
        required: [true, 'Day is required.'],
      },
      moodMorning: {
        type: String,
        required: [true, 'MoodMorning is required.']
      },
      moodEvening: {
        type: String,
        required: [true, 'MoodEvening is required.']
    },}
  );


const Mood = model("Mood", userSchema);

module.exports = Mood;
