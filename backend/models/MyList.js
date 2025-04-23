// models/MyList.js
const mongoose = require("mongoose");

const myListSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile", required: true
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program", required: true
  }
}, { timestamps: true });

// Unique per profile+program
myListSchema.index({ profile:1, program:1 }, { unique: true });

module.exports = mongoose.model("MyList", myListSchema);
