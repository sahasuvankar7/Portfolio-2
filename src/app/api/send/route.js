import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from 'nodemailer';

// export async function GET() {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   try {
//     const data = await resend.emails.send({
//       from: 'suvankarsaha701@gmail.com',
//       to: 'suvankarsaha084@gmail.com',
//       subject: "chok gayyeeee",
//       html:'<p>system fadd dengeeee</p>'
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('error sending email:',error);
//     return NextResponse.json({ error: " failed to send email" });
//   }
// }


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = req;
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['suvankarsaha084@gmail.com', email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting with us</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log(NextResponse.json(data));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// export async function POST( req){
//   const{email,subject, message} = await req.json();
//   const transporter = 
// }