import { auth } from '@lib/db'
import {
	GoogleAuthProvider,
	signInWithRedirect,
	signOut as logout,
} from '@firebase/auth'
import { error } from './error'
import { type FirebaseError } from '@firebase/app'

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
	const Err = (err: FirebaseError) => {
		error(err.message)
		const credential = GoogleAuthProvider.credentialFromError(err)
		return credential
	}

	const Ok = (result: any) => {
		const credential = GoogleAuthProvider.credentialFromResult(result)
		const token = credential?.accessToken
		const user = result.user
		return { user, token }
	}

	signInWithRedirect(auth, provider).then(Ok, Err)
}

export const signOut = () => {
	const Err = (err: FirebaseError) => {
		error(err.message)
	}
	const Ok = (result: any) => {
		console.log(result)
	}
	return logout(auth).then(Ok, Err)
}
