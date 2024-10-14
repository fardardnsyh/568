// server.js
import express from "express";
import { connect } from "mongoose";
import { MongoDB_URL } from "../config";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/auth", require("./routes/authRoutes"));

// Connect to MongoDB
connect(MongoDB_URL).then(() => {
  console.log("Connected to MongoDB");
  // Start the server after successful database connection
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
