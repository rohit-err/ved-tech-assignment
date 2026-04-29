const { generateAndSetCookie } = require("../utils/generateAndSetCookie");
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    generateAndSetCookie(res);
    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  });
  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

const checkAuth = (req, res) => {
  return res.status(200).json({
    success: true,
    admin: req.admin,
  });
};

module.exports = { login, logout, checkAuth };
