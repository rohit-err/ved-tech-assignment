const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./db/connectDB");
const { authRoutes } = require("./routes/auth.route");
const { submissionRoutes } = require("./routes/submission.route");
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://ved-tech-services-website.vercel.app",
      "https://ved-tech-assignment-admin-panel.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/submission", submissionRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
  });
});
