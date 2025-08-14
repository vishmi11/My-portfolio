// controllers/contactController.js
const nodemailer = require('nodemailer');

exports.sendContactMessage = async (req, res) => {
  const { name, senderEmail, message } = req.body;

  if (!name || !senderEmail || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,           // Use 587 for TLS
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Ignore self-signed certs for dev
    },
  });

  const mailOptions = {
    from: senderEmail,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Mail Error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};
