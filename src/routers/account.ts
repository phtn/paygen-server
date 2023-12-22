import {router} from '@trpc'
import {Create} from '@procedures/create'
import {AccountParams} from '@resource/account'
import {isExistingCustomer} from './utils'

export const accountRouter = router({
    create: Create.query(async ({input}) => {
        await isExistingCustomer(input as typeof AccountParams)
    }),
})