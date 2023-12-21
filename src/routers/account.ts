import { router } from '@trpc'
import { Create } from '@procedures/create'
import { AccountParams } from '@resource/account'
import { isExistingCustomer } from './utils'

export const accountRouter = router({
	create: Create.query(async ({ input }) => {
		const response = await isExistingCustomer(input as typeof AccountParams)
		return response
	}),
})

export type AccountRouter = typeof accountRouter
