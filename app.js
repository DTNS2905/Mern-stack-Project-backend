const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const routes = require("./routes/api/testApi");
const loginRoute = require("./routes/api/login");
const registerRoute = require("./routes/api/register");
const bodyParser = require("body-parser");

const app = express();

// Connect Database
connectDB();

// Use the cors middleware with the origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// Use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes modules as middleware for the corresponding paths
app.use("/api/testApi", routes);
app.use("/api/login", loginRoute);
app.use("/api/register", registerRoute);

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send("Resource not found");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
