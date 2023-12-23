import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from '@firebase/auth'
import {TEmailAndPassword} from '@resource/auth'
import {auth} from '@lib/db'

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider()
  return await signInWithRedirect(auth, provider)
}

const createUser = async ({email, password}: typeof TEmailAndPassword) => {
  return await createUserWithEmailAndPassword(auth, email, password)
}

const signInWithEmail = async ({email, password}: typeof TEmailAndPassword) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

const logout = async () => {
  return await signOut(auth)
}

export {createUser, signInWithEmail, logout, googleSignIn}
