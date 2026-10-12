import nodemailer from "nodemailer";

const requiredEnv = ["ZOHO_SMTP_USER", "ZOHO_SMTP_PASS"];

const isMissingEnv = () => requiredEnv.some((key) => !process.env[key]);

const sanitize = (value) => String(value || "").trim();

const validatePayload = (payload) => {
  const fields = ["name", "email", "service", "budget", "timeline", "message"];
  for (const field of fields) {
    if (!sanitize(payload[field])) {
      return `${field} is required`;
    }
  }

  const email = sanitize(payload.email);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please provide a valid email address";
  }

  return null;
};

const createTransporter = () => {
  const host = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
  const port = Number(process.env.ZOHO_SMTP_PORT || "465");

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });
};

export async function POST(request) {
  try {
    if (isMissingEnv()) {
      return Response.json(
        {
          success: false,
          message:
            "Email service is not configured. Add Zoho SMTP environment variables.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const error = validatePayload(body);
    if (error) {
      return Response.json({ success: false, message: error }, { status: 400 });
    }

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const service = sanitize(body.service);
    const budget = sanitize(body.budget);
    const timeline = sanitize(body.timeline);
    const message = sanitize(body.message);

    const transporter = createTransporter();

    const receiver =
      process.env.CONTACT_RECEIVER_EMAIL || process.env.ZOHO_SMTP_USER;

    const subject = `New Inquiry from ${name} - ${service}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      "",
      "Project Goals and Current Challenge:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin-bottom: 12px;">New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project Goals and Current Challenge:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Sholz Creatives Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: receiver,
      replyTo: email,
      subject,
      text,
      html,
    });

    return Response.json(
      {
        success: true,
        message:
          "Thanks, your message has been sent. We will get back within 24 to 48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      {
        success: false,
        message:
          "Something went wrong while sending your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
