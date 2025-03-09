const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User id is Required"],
    },
  },
  {
    timestamps: true,
  }
);

// create model
module.exports = mongoose.model("Post", postSchema);
