// Import required modules
const dotenv = require("dotenv");
// Import database
const database = require("./utils/database");
// Import app
const app = require("./app");

// Configure env
dotenv.config();

// Connect Database
database.connect();

// Set port for the app
const port = process.env.PORT || 8000;

// Start app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
