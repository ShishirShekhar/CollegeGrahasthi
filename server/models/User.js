// Import required models
const mongoose = require("mongoose");

// Create schema for user
const schema = mongoose.Schema({
    email: {
        type: String,
        unique: [true, "Email should be unique"],
        required: [true, "Email is required field"]
    },
    password: {
        type: String,
        required: [true, "Password is required field"]
    }
})

const User = mongoose.model("User", schema);

module.exports = User;
