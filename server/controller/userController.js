// Import required models
const User = require("../models/User");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      status: "Success",
      results: users.length,
      users: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
      error: err,
    });
  }
};

// Add an user
exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.json({
      status: "Success",
      user: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
      error: err,
    });
  }
};
