// Import required models
const Room = require("../models/Room");

// Get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.json({
      status: "Success",
      results: rooms.length,
      rooms: {
        rooms,
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

// Add an room
exports.addRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.json({
      status: "Success",
      room: {
        room,
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
