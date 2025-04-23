// backend/middlewares/profileMiddleware.js
const Profile = require("../models/profile");

module.exports = async (req, res, next) => {
  const profileId = req.header("X-Profile-Id");
  if (!profileId) {
    return res.status(400).json({ message: "Profile ID header missing" });
  }
  try {
    const profile = await Profile.findOne({
      _id: profileId,
      user: req.user.id
    });
    if (!profile) {
      return res.status(403).json({ message: "Invalid profile ID" });
    }
    req.profile = profile;
    next();
  } catch (err) {
    console.error("Profile middleware error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
