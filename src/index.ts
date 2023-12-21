import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { trpc } from '@elysiajs/trpc'
import { account } from './routers/account'

const app = new Elysia()
	.use(cors())
	.get('/', () => 'Elysia + tRPC')
	.use(trpc(account))
	.listen(8080)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
