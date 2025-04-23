const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const programRoutes = require("./routes/programRoutes");
const userRoutes = require("./routes/userRoutes");
const corsMiddleware = require("./middlewares/corsMiddleware");
const reviewRoutes = require("./routes/reviewRoutes");
const myListRoutes = require("./routes/myListRoutes");

const app = express();

// Connect to DB
connectDB();
app.use(corsMiddleware); // 👈 לפני כל route

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/mylist", myListRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
