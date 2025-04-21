// 📁 backend/routes/programRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { getHomePage } = require("../controllers/programController");

// returns cover + four rows (two static, two dynamic)
router.get("/homepage", auth, getHomePage);

module.exports = router;
