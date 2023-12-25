import {mergeRouter} from '@trpc'
import {accountRouter} from './account'
import {authRouter} from './auth'
import {emailRouter} from './email';
import {statusRouter} from "@routers/status";

export const mergedRoutes = mergeRouter(accountRouter, authRouter, emailRouter, statusRouter)

export type MergedRoutes = typeof mergedRoutes
