// 📁 routes/userRoutes.js

const express = require("express");
const router = express.Router();
const { deleteUser } = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

router.delete("/:id", auth, deleteUser);

module.exports = router;
