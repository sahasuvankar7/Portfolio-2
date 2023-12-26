import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: email,
      to: [fromEmail],
      subject: subject,
      react: (
        <>
          <h1>{body.subject}</h1>
          <p>Thank you for contacting with us</p>
          <p>{body.message}</p>
        </>
      ),
    });

    console.log("email send response", data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: "failed to send the error",
      details: error.message,
    });
  }
}

// export async function POST() {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   try {
//     const {data,email} = await resend.emails.send({
//       from: 'suvankarsaha701@gmail.com',
//       to: 'suvankarsaha037@gmail.com',
//       subject: "chok gayyeeee",
//       html:'<p>system fadd dengeeee</p>'
//     });

  
//     return NextResponse.json({
//       status:"ok",
//     });
//   } catch (error) {
//     console.error('error sending email:',error);
//     return NextResponse.json({ error: " failed to send email" });
//   }
// }
