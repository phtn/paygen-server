import nodemailer from 'nodemailer'

export const g_transporter = nodemailer.createTransport({
  host: `${process.env.GMAIL_HOST}`,
  port: +`${process.env.GMAIL_PORT}`,
  secure: false,
  auth: {
    user: `${process.env.GMAIL_USER}`,
    pass: `${process.env.GMAIL_PASS}`
  }
})