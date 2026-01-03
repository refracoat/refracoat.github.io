import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Received contact form submission:", body);

        const {
            companyName,
            companyId,
            contactPerson,
            email,
            phone,
            industry,
            service,
            location,
            message
        } = body;

        // Basic server-side validation
        if (!email || !contactPerson || !message) {
            console.error("Missing required fields");
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("RESEND_API_KEY is not set");
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        console.log("Sending email via Resend...");
        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.RESEND_TO_EMAIL ? [process.env.RESEND_TO_EMAIL] : ['delivered@resend.dev'],
            subject: `New Enquiry from ${companyName}`,
            html: `
        <div>
          <p><strong>Company:</strong> ${companyName} (${companyId})</p>
          <p><strong>Contact Person:</strong> ${contactPerson}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Request:</strong> ${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log("Email sent successfully:", data);
        return NextResponse.json({ data });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
