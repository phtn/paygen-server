import {SendEmail} from "@procedures/email";
import {router} from '@trpc'
import {sendEmail} from "../nodemailer/send";
import {EmailParams} from "@resource/email";

export const emailRouter = router({
  sendEmail: SendEmail.query(async ({input}) => {

    const Ok = () => {
      return 'Email sent!'
    }
    const Err = (err: Error) => {
      return err.message
    }
    return sendEmail(input as typeof EmailParams).then(Ok, Err)

  }),
})