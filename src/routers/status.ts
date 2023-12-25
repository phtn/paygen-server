import {procedure, router} from '@trpc'

export const statusRouter = router({
  checkStatus: procedure.query(() => 'online'),
})