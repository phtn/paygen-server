import {procedure, router} from '@trpc'
import {UserEmailPass} from "@procedures/auth";
import {createUser, googleSignIn, logout, signInWithEmail} from "@fire/auth";
import {TEmailAndPassword} from "@resource/auth";

export const authRouter = router({
  signInWithEmailAndPassword: UserEmailPass.query(({input}) => {
    return signInWithEmail(input as typeof TEmailAndPassword)
  }),
  signInWithGoogle: procedure.query(() => {
    return googleSignIn()
  }),
  signOut: procedure.query(() => {
    return logout()
  }),
  createUser: UserEmailPass.query(({input}) => {
    return createUser(input as typeof TEmailAndPassword)
  })
})