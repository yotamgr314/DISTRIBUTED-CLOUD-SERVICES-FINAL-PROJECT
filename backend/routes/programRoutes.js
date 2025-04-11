const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { getHomePageContent } = require("../controllers/programController");

router.get("/homepage", auth, getHomePageContent);

module.exports = router;
