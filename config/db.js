require('dotenv').config(); // Load environment variables from .env file
const mongoose = require("mongoose");

const dbURI = process.env.DB_URI;

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
