// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [emailRegex, "Invalid email"],
    },
    password: {
      type: String,
      required: true,
      match: [passwordRegex, "Password must have ≥8 chars, letter+digit"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    profiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
      },
    ],
    selectedProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      default: null,
    },
    selectedAvatarIndex: {
      type: Number,
      min: 0,
      max: 3,
      default: null,
    },
  },
  { timestamps: true }
);

// hash password
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.comparePassword = function (pw) {
  return bcrypt.compare(pw, this.password);
};

// cascade delete profiles on user removal
userSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await mongoose.model("Profile").deleteMany({ user: doc._id });
  }
});

module.exports = mongoose.model("User", userSchema);
