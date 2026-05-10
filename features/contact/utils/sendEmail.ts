import { render } from "react-email";
import transporter from "../config/nodemailer";
import EmailTemplate from "../email/EmailTemplate";
import { ContactFormData } from "../schema/contactSchema";

export default async function sendEmail(data: ContactFormData) {
    const html = await render(EmailTemplate(data));

    await transporter.sendMail({
        from: `"Portfolio" <${process.env.SENDER_EMAIL}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: data.email,
        subject: `${data.subject} from ${data.name}`,
        html,
    });
}