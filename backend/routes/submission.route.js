const express = require("express");
const {
  createSubmission,
  getSubmissions,
} = require("../controllers/submission.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const submissionRoutes = express.Router();

submissionRoutes.post("/", createSubmission);
submissionRoutes.get("/", verifyToken, getSubmissions);

module.exports = { submissionRoutes };
