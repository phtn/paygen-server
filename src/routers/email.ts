import {SendEmail} from "@procedures/email";
import {router} from '@trpc'
import {sendEmail} from "../nodemailer/send";
import {EmailParams} from "@resource/email";

export const emailRouter = router({
  create: SendEmail.query(async ({input}) => {
    return await sendEmail(input as typeof EmailParams)
  }),
})