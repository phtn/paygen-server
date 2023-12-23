import {t} from 'elysia'

export const TEmailAndPassword = t.Object({
  email: t.String({format: 'email'}),
  password: t.String({minLength: 4})
})