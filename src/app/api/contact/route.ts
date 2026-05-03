import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to recipient (Satakshi)
    const recipientMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'satakshiroy101@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send confirmation email to sender
    const senderMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Thank you for your message, ${name}!</h2>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #666;">Looking forward to connecting with you!</p>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Best regards,<br>
            Satakshi Roy
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(recipientMailOptions),
      transporter.sendMail(senderMailOptions),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully! Check your inbox for confirmation.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact via WhatsApp.' },
      { status: 500 }
    );
  }
}
