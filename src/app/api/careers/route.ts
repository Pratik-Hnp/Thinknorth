
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, mobile, email, city, position, message } = data;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Boolean(process.env.SMTP_SECURE), // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER, // Send to yourself
            subject: `New Career Application: ${position} - ${name}`,
            html: `
        <h2>New Career Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message/Cover Letter:</strong></p>
        <p>${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending application:', error);
        return NextResponse.json({ message: 'Failed to send application' }, { status: 500 });
    }
}
