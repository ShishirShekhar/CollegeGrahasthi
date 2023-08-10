// Import required modules
const express = require("express");
// Import required controllers
const roomController = require("../controller/roomController");

// Configure router
const router = express.Router();

// Room routes
router.route("/").get(roomController.getAllRooms).post(roomController.addRoom);

module.exports = router;
