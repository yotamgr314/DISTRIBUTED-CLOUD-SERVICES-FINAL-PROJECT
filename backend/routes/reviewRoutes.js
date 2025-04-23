// backend/routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const profileMw = require("../middlewares/profileMiddleware");
const { requireUser, requireAdmin } = require("../middlewares/roleMiddleware");
const reviewController = require("../controllers/reviewController");

router.use(auth);

router.post(
  "/", 
  requireUser,
  profileMw,          // ← new 
  reviewController.createReview
);
router.get("/program/:id", auth, reviewController.getPublicReviews);
router.get("/my", requireUser, profileMw, reviewController.getMyReviews);
router.get("/", requireAdmin, reviewController.getAllReviews);

module.exports = router;
