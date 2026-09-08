import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
  name,
  email,
  message,
  website,
} = body;
if (website) {
  return NextResponse.json(
    {
      success: true,
    },
    {
      status: 200,
    }
  );
}

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          error: "Please provide a little more detail about your project.",
        },
        {
          status: 400,
        }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error: "Email service is not configured yet.",
        },
        {
          status: 500,
        }
      );
    }

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "",
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: `
Name: ${name}

Email: ${email}

Message:
${message}
      `,
    });

    if (result.error) {
      console.error(result.error);

      return NextResponse.json(
        {
          error: "Unable to send your message.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}