// userRoutes.js
import express from "express";
const router = express.Router();
const authControllers = require("../controllers/authControllers");

// Signup route
router.post("/register", authControllers.register);

// Signin route
router.post("/login", authControllers.login);

module.exports = router;
