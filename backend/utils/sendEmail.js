const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendEmail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `"Ved Tech Services" <${process.env.ADMIN_EMAIL}>`,
    replyTo: email,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message || "No message provided"}`,
  });
};

module.exports = { sendEmail };
