import {mergeRouter} from '@trpc'
import {accountRouter} from './account'
import {authRouter} from './auth'

export const mergedRoutes = mergeRouter(accountRouter, authRouter)

export type MergedRoutes = typeof mergedRoutes
