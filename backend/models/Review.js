// models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program", required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", required: true
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile", required: true
  },
  text: String,
  rating: { type: Number, min:0, max:5 },
  isPublic: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
