const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { requireUser, requireAdmin } = require("../middlewares/roleMiddleware");
const { getHomePage, createProgram, getProgramById  } = require("../controllers/programController");

 // GET /api/programs/homepage — user only
 router.get("/homepage", auth, requireUser, getHomePage);

 // POST /api/programs — admin only
 router.post("/", auth, requireAdmin, createProgram);
 module.exports = router;


  // GET /api/programs/:id        ← הוסף מתחת
router.get("/:id", auth, getProgramById);
