import { Resend } from "resend";
import { z } from "zod/v4";
import { NextResponse } from "next/server";

// Check for required environment variables
if (!process.env.RESEND_API_KEY) {
  console.error("❌ Missing RESEND_API_KEY environment variable. Please add it to .env.local");
}

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY || "");

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().max(20, "Phone number is too long").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

export async function POST(request: Request) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY not found in environment variables");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const { name, email, phone, message } = result.data;

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "info@filetaxes.ca"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: formatPlainTextEmail({ name, email, phone, message }),
      html: formatHtmlEmail({ name, email, phone, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, message: "Failed to send email. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

// Format plain text email
function formatPlainTextEmail({ name, email, phone, message }: { name: string; email: string; phone?: string; message: string }) {
  return `
New Contact Form Submission
============================

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This message was sent from the FileTaxes.ca contact form.
  `.trim();
}

// Format HTML email
function formatHtmlEmail({ name, email, phone, message }: { name: string; email: string; phone?: string; message: string }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #6b7280;">Name:</strong>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          ${escapeHtml(name)}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #6b7280;">Email:</strong>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="mailto:${escapeHtml(email)}" style="color: #3b82f6;">${escapeHtml(email)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #6b7280;">Phone:</strong>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          ${
            phone
              ? `<a href="tel:${escapeHtml(phone)}" style="color: #3b82f6;">${escapeHtml(phone)}</a>`
              : '<span style="color: #9ca3af;">Not provided</span>'
          }
        </td>
      </tr>
    </table>
    
    <div style="margin-top: 24px;">
      <strong style="color: #6b7280;">Message:</strong>
      <div style="background: white; padding: 16px; border-radius: 8px; margin-top: 8px; border: 1px solid #e5e7eb;">
        ${escapeHtml(message).replace(/\n/g, "<br>")}
      </div>
    </div>
  </div>
  
  <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
    This message was sent from the FileTaxes.ca contact form.
  </p>
</body>
</html>
  `.trim();
}

// Escape HTML to prevent XSS
function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return str.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}
