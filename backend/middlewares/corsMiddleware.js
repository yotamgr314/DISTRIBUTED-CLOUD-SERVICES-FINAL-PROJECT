// backend/middlewares/corsMiddleware.js
const cors = require("cors");

const corsOptions = {
  origin: "*", // מאפשר לכל כתובת גישה (לשימוש זמני בלבד!)
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsOptions);
