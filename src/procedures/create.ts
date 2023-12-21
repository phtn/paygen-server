import { compile } from '@elysiajs/trpc'
import { procedure } from '@trpc'
import { AccountParams } from '@resource/account'

export const Create = procedure.input(compile(AccountParams))
