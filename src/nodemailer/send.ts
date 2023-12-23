import {g_transporter} from "./gmail";
import {EmailParams} from "@resource/email";

export const sendEmail = async ({to, cc, subject, html, attachments}: typeof EmailParams) => {
  await g_transporter.sendMail({
    from: '"PayGen" <phtn458@gmail.com>',
    to,
    cc,
    subject,
    html,
    attachments
  })
}