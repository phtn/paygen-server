import {mergeRouter} from '@trpc'
import {accountRouter} from './account'
import {authRouter} from './auth'
import {emailRouter} from './email';

export const mergedRoutes = mergeRouter(accountRouter, authRouter, emailRouter)

export type MergedRoutes = typeof mergedRoutes
