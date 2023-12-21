import axios, { AxiosRequestConfig } from 'axios'

export const createAxiosInstance = (config?: AxiosRequestConfig) =>
	axios.create({
		...config,
		headers: {
			common: {
				Accept: 'application/json',
				Authorization: `Basic ${process.env.XENDIT_TEST}`,
				'Content-Type': 'application/json',
				...config?.headers,
			},
		},
		baseURL: 'https://api.xendit.co',
	})

export const accountConfig = {
	method: 'POST',
	url: '/customers',
}

export const paymentConfig = {
	method: 'POST',
	url: '/v2/invoices',
}
