import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ContactSubmission from '@/lib/models/ContactSubmission';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// POST contact form submission
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, message, subject, phone } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await ContactSubmission.create({
      name,
      email,
      message,
      subject,
      phone,
    });

    // Send email
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.CONTACT_EMAIL,
          to: process.env.CONTACT_EMAIL,
          subject: subject || `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Continue even if email fails
      }
    }

    return NextResponse.json(
      { success: true, data: submission, message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
