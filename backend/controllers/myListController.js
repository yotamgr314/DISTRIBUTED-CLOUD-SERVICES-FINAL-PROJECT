// backend/controllers/myListController.js
const MyList = require("../models/MyList");

// GET /api/mylist/me
exports.getMyList = async (req, res) => {
  const profileId = req.profile._id;
  const items = await MyList.find({ profile: profileId })
    .populate("program", "title posterPath type")
    .sort({ createdAt: -1 });
  res.json(items);
};

// POST /api/mylist (toggle)
exports.toggleMyList = async (req, res) => {
  const { programId } = req.body;
  const profileId = req.profile._id;

  // אם כבר קיים, נמחק אותו
  const existing = await MyList.findOne({ profile: profileId, program: programId });
  if (existing) {
    await existing.deleteOne();            // ← כאן השתנה ל־deleteOne()
    return res.json({ message: "Removed from My List" });
  }

  // אחרת, נוסיף חדש
  const added = await MyList.create({ profile: profileId, program: programId });
  res.status(201).json(added);
};

// DELETE /api/mylist/:id
exports.removeFromMyList = async (req, res) => {
  const { id } = req.params;
  const profileId = req.profile._id;
  const removed = await MyList.findOneAndDelete({ _id: id, profile: profileId });
  if (!removed) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json({ message: "Removed" });
};
