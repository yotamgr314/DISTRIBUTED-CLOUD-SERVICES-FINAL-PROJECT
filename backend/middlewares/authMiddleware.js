// TEMPORARY BYPASS — always lets requests through for dev
module.exports = (req, res, next) => {
  req.user = { id: "fakeUserId", role: "admin" }; // or 'user'
  next();
};
