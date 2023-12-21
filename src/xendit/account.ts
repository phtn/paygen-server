import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AccountParams, CreateAccountResource, url } from '@resource/account'
import { createAxiosInstance, accountConfig as config } from './axios'
import { shapeAccount } from '@transformers'
import { error } from '@fire/error'
import { createPaymentLink } from './payment'
import { createFirebaseAccount } from '@fire/create'

export const onCreateAccount = async (
	body: CreateAccountResource,
	axiosInstance: AxiosInstance,
	config?: AxiosRequestConfig
) => {
	const { data, status } = await axiosInstance.post<{
		body: CreateAccountResource
	}>(url, body, config)
	return { data, status }
}

export const createAccount = async (values: typeof AccountParams) => {
	const data = shapeAccount(values)
	const axiosIntance = createAxiosInstance(config)

	const Err = (err: Error) => {
		error({ ...err, id: data.reference_id })
	}
	const Ok = (response: any) => {
		console.log('Account Created', response)
		const id = response.data.id
		createFirebaseAccount(response.data, id)
		return createPaymentLink(values, id)
	}

	return await onCreateAccount(data, axiosIntance).then(Ok, Err)
}
