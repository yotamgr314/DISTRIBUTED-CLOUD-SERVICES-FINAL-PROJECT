const Profile = require("../models/profile");

// GET /api/profiles/me
exports.getMyProfiles = async (req, res) => {
  const profiles = await Profile.find({ user: req.user.id });
  res.status(200).json(profiles);
};

// POST /api/profiles
exports.createProfile = async (req, res) => {
  const existingProfiles = await Profile.countDocuments({ user: req.user.id });
  if (existingProfiles >= 5) {
    return res.status(400).json({ message: "Maximum 5 profiles allowed" });
  }

  const newProfile = await Profile.create({
    name: req.body.name || "New Profile",
    avatarIndex: Math.floor(Math.random() * 4),
    user: req.user.id,
  });

  res.status(201).json(newProfile);
};

// PATCH /api/profiles/:id
exports.renameProfile = async (req, res) => {
  const profile = await Profile.findOne({
    _id: req.params.id,
    user: req.user.id,
  });
  if (!profile) return res.status(404).json({ message: "Profile not found" });

  profile.name = req.body.name || profile.name;
  await profile.save();
  res.json(profile);
};

// DELETE /api/profiles/:id
exports.deleteProfile = async (req, res) => {
  const deleted = await Profile.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });
  if (!deleted) return res.status(404).json({ message: "Profile not found" });
  res.status(200).json({ message: "Profile deleted" });
};
