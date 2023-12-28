import {router} from '@trpc'
import {Create} from '@procedures/payment'
import {AccountParams} from '@resource/account'
import {isExistingCustomer} from './utils'

export const accountRouter = router({
  createPaymentLink: Create.query(async ({input}) => {
    return await isExistingCustomer(input as typeof AccountParams)
  }),
})