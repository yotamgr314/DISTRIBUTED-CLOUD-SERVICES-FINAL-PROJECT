// models/Program.js
const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  externalId: { type: String, required: true, index: true },
  type: { type: String, enum: ["movie","tv"], required: true },
  title: { type: String, required: true },
  description: String,
  genres: [String],
  cast: [String],
  crew: [String],
  releaseDate: Date,
  posterPath: String,
  backdropPath: String
}, { timestamps: true });

module.exports = mongoose.model("Program", programSchema);
