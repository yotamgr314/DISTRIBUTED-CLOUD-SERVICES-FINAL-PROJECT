// 📁 routes/programRoutes.js

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { getHomePage } = require("../controllers/programController");

// this endpoint returns both the rotating cover and the "New on Netflix" row
router.get("/homepage", auth, getHomePage);

module.exports = router;
