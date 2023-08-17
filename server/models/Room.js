// Import required models
const mongoose = require("mongoose");

// Create schema for room
const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required field"],
  },
  description: {
    type: String,
    required: [true, "Description is required field"],
  },
  price: {
    type: Number,
    required: [true, "Price is required field"],
  },
  facilities: {
    type: [String],
    required: [true, "Facilities are required field"],
  },
  features: {
    type: [String],
    default: [],
    require: [true, "Features are required field"],
  },
  rating: {
    type: Number,
    validate: function (val) {
      return val > 0 && val < 6;
    },
    message: "Rating should be between 0 and 6",
  },
  reviews: {
    type: Number,
    default: 0,
  },
});

const Room = mongoose.model("Room", schema);

module.exports = Room;
