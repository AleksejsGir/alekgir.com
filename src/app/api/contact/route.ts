import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(req: Request) {
  try {
    console.log('Starting contact form submission...');

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API Key' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, projectType, budgetRange, message } = await req.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required fields.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'AlekGir Contact <hello@alekgir.com>', // Verified domain sender
      to: process.env.CONTACT_RECEIVER || 'hello@alekgir.com',
      replyTo: email,
      subject: `New Project Inquiry from ${name} - ${projectType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(to right, #17A2B8, #9333ea); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">New Project Inquiry</h1>
            <p style="margin: 5px 0 0; opacity: 0.8;">Message from alekgir.com</p>
          </div>
          <div style="padding: 30px; background: white;">
            <div style="margin-bottom: 25px;">
              <p style="text-transform: uppercase; font-size: 11px; font-weight: 700; color: #6b7280; margin: 0 0 5px; letter-spacing: 0.05em;">Client Details</p>
              <p style="margin: 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #17A2B8; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="display: grid; grid-template-cols: 1fr 1fr; gap: 20px; margin-bottom: 25px; padding: 20px; background: #f9fafb; border-radius: 8px;">
               <div style="margin-bottom: 10px;">
                  <p style="text-transform: uppercase; font-size: 11px; font-weight: 700; color: #6b7280; margin: 0 0 5px;">Project Type</p>
                  <p style="margin: 0; font-weight: 600;">${projectType}</p>
               </div>
               <div>
                  <p style="text-transform: uppercase; font-size: 11px; font-weight: 700; color: #6b7280; margin: 0 0 5px;">Budget Range</p>
                  <p style="margin: 0; font-weight: 600;">${budgetRange}</p>
               </div>
            </div>

            <div style="margin-top: 25px;">
              <p style="text-transform: uppercase; font-size: 11px; font-weight: 700; color: #6b7280; margin: 0 0 10px; letter-spacing: 0.05em;">Message Content</p>
              <div style="background: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; font-style: italic; color: #4b5563;">
                "${message}"
              </div>
            </div>
          </div>
          <div style="background: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              © ${new Date().getFullYear()} AlekGir. This is an automated notification.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
