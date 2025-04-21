// 📁 backend/middlewares/roleMiddleware.js

exports.requireUser = (req, res, next) => {
  // authMiddleware already set req.user = { id, role }
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Forbidden: users only" });
  }
  next();
};

exports.requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: admins only" });
  }
  next();
};
