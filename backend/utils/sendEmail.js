const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ name, email, message }) => {
  await resend.emails.send({
    from: "Ved Tech Services <onboarding@resend.dev>",
    reply_to: email,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message || "No message provided"}`,
  });
};

module.exports = { sendEmail };
