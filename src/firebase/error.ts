import { collection, addDoc } from 'firebase/firestore'
import { db } from '@lib/db'

export const error = async (error: unknown) => {
	const Err = (error: Error) => {
		throw new Error(error.message)
	}
	const Ok = (value: any) => {
		return value
	}

	if (typeof error !== 'object') {
		throw new Error('user must be an object')
	}

	if (error) {
		const docRef = await addDoc(collection(db, 'errors'), {
			...error,
			created_at: new Date().getTime(),
		}).then(Ok, Err)
		console.log('Error written with ID: ', docRef.id)
	}
}
