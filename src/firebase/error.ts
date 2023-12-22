import { collection, addDoc } from 'firebase/firestore'
import { db } from '@lib/db'

export const error = async (error: unknown) => {
	const Err = (error: Error) => {
		throw new Error(error.message)
	}
	const Ok = (value: any) => {
		console.log(value)
	}

	if (typeof error !== 'object') {
		throw new Error('user must be an object')
	}

	if (error) {
		return await addDoc(collection(db, 'errors'), {
			...error,
			created_at: new Date().getTime(),
		}).then(Ok, Err)
	}
}
