import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, lastname, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: "joshua.almaleh@aspiretutors.ca",
      to: "joshua.almaleh@aspiretutors.ca", 
      subject: `New message from ${name} ${lastname}`,
      html: `
        <p><strong>Name:</strong> ${name} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("Email error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
