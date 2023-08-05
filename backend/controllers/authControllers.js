const User = require("../models/User");

module.exports.register_post = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const userDoc = await User.create({ email, username, password });
    res.status(201).json(userDoc);
  } catch (error) {
    res.status(400).json({ error: "Username already registered" });
  }
};

module.exports.blogs_get = async (req, res) => {
  res.json({ message: "Hello World Again!" });
};
