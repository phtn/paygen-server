import {compile} from '@elysiajs/trpc'
import {procedure} from '@trpc'
import {EmailParams} from '@resource/email'

export const SendEmail = procedure
  .input(compile(EmailParams))
