const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      unique: [true, "Email must be unique"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password must be provided"],
      trim: true,
      select: false,
    },
    veridied: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      select: false,
    },
    verificationCodeValidation: {
      type: Number,
      select: false,
    },
    forgotPasswordCode: {
      type: String,
      select: false,
    },
    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// create model
module.exports = mongoose.model("User", userSchema);
