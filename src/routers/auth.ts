import {signInWithGoogle, signOut} from '@fire/auth'
import {procedure, router} from '@trpc'

export const authRouter = router({
    signInWithGoogle: procedure.query(() => {
        signInWithGoogle()
    }),
    signOut: procedure.query(() => {
        signOut().then(res => res)
    }),
})