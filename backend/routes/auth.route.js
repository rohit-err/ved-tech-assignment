const express = require("express");
const { login, logout, checkAuth } = require("../controllers/auth.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/checkAuth", verifyToken, checkAuth);

module.exports = { authRoutes };
