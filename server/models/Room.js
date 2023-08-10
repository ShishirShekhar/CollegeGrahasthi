// Import required models
const mongoose = require("mongoose");

// Create schema for room
const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Email is required field"]
    }
})

const Room = mongoose.model("Room", schema);

module.exports = Room;
