import { Resend } from "resend";
import ServicesContact from './ServicesContact'
// import { Email } from "./email";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(resend, 'resend')

export async function POST() {
  await resend.sendEmail({
    from: "you@example.com",
    to: "erinlejhimmy@gmail.com",
    subject: "hello world",
    react: ServicesContact(),
  });
}
