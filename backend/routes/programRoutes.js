// backend/routes/programRoutes.js

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { requireUser, requireAdmin } = require("../middlewares/roleMiddleware");
const profileMw = require("../middlewares/profileMiddleware");

const {
  getHomePage,
  createProgram,
  getProgramById,
  getRecommendations,
} = require("../controllers/programController");

// 1. Homepage (user only)
router.get("/homepage", auth, requireUser, getHomePage);

// 2. AI Recommendations (user only, requires X-Profile-Id header)
router.get(
  "/recommendations",
  auth,
  requireUser,
  profileMw,
  getRecommendations
);

// 3. Get single program by ID (all authenticated)
router.get("/:id", auth, getProgramById);

// 4. Create program (admin only)
router.post("/", auth, requireAdmin, createProgram);

module.exports = router;
