// backend/controllers/reviewController.js
const Review = require("../models/Review");
const Program = require("../models/Program");
const Profile = require("../models/profile");

// POST /api/reviews
exports.createReview = async (req, res) => {
    const { programId, text, rating, isPublic } = req.body;
    const profileId = req.profile._id;       // ← עכשיו מגיע מה־middleware

  if (!profileId)
    return res.status(400).json({ message: "No profile selected" });

  // וולידציה שהפרופיל שייך למשתמש:
  const profile = await Profile.findOne({ _id: profileId, user: req.user.id });
  if (!profile) return res.status(403).json({ message: "Invalid profile" });

  // בדיקה שקיימת תוכנית
  const program = await Program.findById(programId);
  if (!program) return res.status(404).json({ message: "Program not found" });

  const review = await Review.create({
    program: programId,
    user: req.user.id,
    profile: profileId,
    text,
    rating,
    isPublic,
  });

  res.status(201).json(review);
};

// GET /api/reviews/program/:id
exports.getPublicReviews = async (req, res) => {
  const { id } = req.params;
  const reviews = await Review.find({ program: id, isPublic: true })
    .populate("profile", "name avatarIndex")
    .sort({ createdAt: -1 });

  res.json(reviews);
};

// GET /api/reviews/my
exports.getMyReviews = async (req, res) => {
    const profileId = req.profile._id;       // ← גם כאן
    const reviews = await Review.find({ profile: profileId })
      .populate("program", "title posterPath type")
      .sort({ createdAt: -1 });
    res.json(reviews);
  };
  

// GET /api/reviews (admin only)
exports.getAllReviews = async (req, res) => {
  const { genre, type, program } = req.query;
  let filter = {};
  if (program) filter.program = program;
  if (type) filter["program.type"] = type;
  if (genre) filter["program.genres"] = genre;

  const reviews = await Review.aggregate([
    {
      $lookup: {
        from: "programs",
        localField: "program",
        foreignField: "_id",
        as: "program"
      }
    },
    { $unwind: "$program" },
    { $match: filter },
    {
      $project: {
        text:1, rating:1, isPublic:1,
        user:1, profile:1,
        program: { title:1, type:1, genres:1 }
      }
    },
    { $sort: { createdAt: -1 } }
  ]);

  res.json(reviews);
};
