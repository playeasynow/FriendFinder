// Dependencies
require("dotenv").config();
const express = require("express");
const path = require("path");


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'))


// Routes
// Basic route that sends the user first to the AJAX Page
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
