// Import required modules
const express = require("express");
// Import required controllers
const userController = require("../controller/userController");

// Configure router
const router = express.Router();

// User routes
router.route("/").get(userController.getAllUsers).post(userController.addUser);

module.exports = router;
