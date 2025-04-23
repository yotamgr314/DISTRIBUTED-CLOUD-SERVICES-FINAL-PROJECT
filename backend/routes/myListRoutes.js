// backend/routes/myListRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const profileMw = require("../middlewares/profileMiddleware");
const { requireUser } = require("../middlewares/roleMiddleware");
const myListController = require("../controllers/myListController");

// Protect all routes: authenticated users only
router.use(auth, requireUser);

// Get all My List items for the selected profile
router.get(
  "/me",
  profileMw,
  myListController.getMyList
);

// Toggle (add/remove) a program in My List
router.post(
  "/",
  profileMw,
  myListController.toggleMyList
);

// Delete a specific My List entry by its document ID
router.delete(
  "/:id",
  profileMw,
  myListController.removeFromMyList
);

module.exports = router;
