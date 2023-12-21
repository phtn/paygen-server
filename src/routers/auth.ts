import { signInWithGoogle, signOut } from '@fire/auth'
import { procedure, router } from '@trpc'

export const authRouter = router({
	signInWithGoogle: procedure.query(() => {
		const response = signInWithGoogle()
		return response
	}),
	signOut: procedure.query(() => {
		const response = signOut()
		return response
	}),
})

export type AuthRouter = typeof authRouter
