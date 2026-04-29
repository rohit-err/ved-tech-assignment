const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true },
);

const submissionModel = mongoose.model("Submission", submissionSchema);
module.exports = { submissionModel };
