// app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { email, message } = body;

  console.log("Resend key:", process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "laxitajain912@gmail.com",
      subject: "New Contact Message",
      reply_to: email,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}
