import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from '@lib/db'
import { error } from './error'
import { CreateAccountResource } from '@resource/account'
import {FirebaseError} from "@firebase/app";

export const createFirebaseAccount = async (
	customer: CreateAccountResource,
	id: string
) => {
	const Err = (err: FirebaseError) => {
		error(err)
	}
	const Ok = (response: any) => {
		return response
	}

	if (typeof customer !== 'object') {
		throw new Error('customer must be an object')
	}

	if (customer) {
		const docRef = collection(db, 'customers')
		await setDoc(doc(docRef, id), {
			...customer,
			is_active: true,
			created_by: 'admin',
			created_at: new Date().getTime(),
			updated_at: new Date().getTime(),
		}).then(Ok, Err)

		console.log('Account created with ID: ', id)
	}
}
