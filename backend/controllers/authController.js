const User = require("../models/user");
const generateToken = require("../utils/generateToken");

exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;

  const alreadyExists = await User.findOne({ email });
  if (alreadyExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ email, password, role });
  const token = generateToken(user);

  res.status(201).json({ token });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
};
