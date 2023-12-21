import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from '@lib/db'
import { error } from './error'
import { CreateAccountResource } from '@resource/account'

export const createFirebaseAccount = async (
	customer: CreateAccountResource,
	id: string
) => {
	const Err = (err: Error) => {
		error(err)
	}
	const Ok = (value: any) => {
		return value
	}

	if (typeof customer !== 'object') {
		throw new Error('customer must be an object')
	}

	if (customer) {
		const docRef = collection(db, 'customers')
		await setDoc(doc(docRef, id), {
			...customer,
			createdAt: new Date().getTime(),
			createdBy: 'admin',
			updatedAt: new Date().getTime(),
			isActive: true,
		}).then(Ok, Err)

		console.log('Account created with ID: ', id)
	}
}
