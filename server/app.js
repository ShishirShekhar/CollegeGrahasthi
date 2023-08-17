// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Import required routes
const roomRoutes = require("./routes/roomRoutes");
const userRoutes = require("./routes/userRoutes");

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  return res.status(400).json({ message: "Server is running successfully!" });
});

// Use the routes middleware
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/rooms", roomRoutes);

module.exports = app;
