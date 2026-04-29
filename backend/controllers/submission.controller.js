const { submissionModel } = require("../models/submission.model");
const { sendEmail } = require("../utils/sendEmail");

const createSubmission = async (req, res) => {
  try {
    const newSubmission = new submissionModel(req.body);
    await newSubmission.save();

    sendEmail(req.body).catch((err) =>
      console.error("Email notification failed:", err.message),
    );

    return res.status(201).json({
      success: true,
      message: "Submission created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const submissionList = await submissionModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      submissions: submissionList,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { createSubmission, getSubmissions };
