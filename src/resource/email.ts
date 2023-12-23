import {t} from 'elysia'

export const EmailParams = t.Object({
  to: t.String(),
  cc: t.Nullable(t.String()),
  subject: t.String(),
  html: t.String(),
  attachments: t.Nullable(t.Array(t.Object({
    filename: t.String(),
    contentType: t.String(),
    path: t.String()
  })))
})