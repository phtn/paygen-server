import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from '@lib/db'
import { error } from './error'
import { PaymentResponse } from '@resource/payment'

export const update = async (data: PaymentResponse, id: string) => {
	const Err = (err: Error) => {
		error(err)
	}
	const Ok = (response: any) => {
		return response
	}

	if (data) {
		const customerRef = doc(db, 'customers', id)
		const invoiceRef = collection(customerRef, 'invoice')
		const docRef = doc(invoiceRef, data.external_id)

		await setDoc(docRef, {
			...data,
			created_at: new Date().getTime(),
			updated_at: new Date().getTime(),
		}).then(Ok, Err)

		console.log('Payment link created with invoice_id: ', docRef.id)
	}
}
