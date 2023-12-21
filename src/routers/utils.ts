import { AccountParams } from '@resource/account'
import { CustomerChecker } from 'firebase/checker'
import { createAccount } from 'xendit/account'
import { createPaymentLink } from 'xendit/payment'

export const isExistingCustomer = async (values: typeof AccountParams) => {
	const mobile_number = values.mobile_number

	const check = await CustomerChecker('customers', mobile_number)

	if (check?.length) {
		const id = check[0].id
		const response = await createPaymentLink(values, id)
		console.log('Registered', response)
		return response.data
	} else {
		const response = await createAccount(values)
		return response
	}
}
