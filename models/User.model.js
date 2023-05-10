const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    age: {
      type: Number,
      required: [true, 'age is required.']
    },
    email: {
      type: String,
      required: [true, 'email is required.']
    },
    password: {
      type: String,
      required: [true, 'email is required.']
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
