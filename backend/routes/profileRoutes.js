const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getMyProfiles,
  createProfile,
  renameProfile,
  deleteProfile,
} = require("../controllers/profileController");

// All routes are protected (need auth)
router.use(auth);

router.get("/me", getMyProfiles);
router.post("/", createProfile);
router.patch("/:id", renameProfile);
router.delete("/:id", deleteProfile);

module.exports = router;
