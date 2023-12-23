import {AxiosInstance} from 'axios'
import {createAxiosInstance, paymentConfig as config} from './axios'
import {CreateCheckoutResource, PaymentResponse, url} from '@resource/payment'
import {shapePayment as transform} from '@transformers'
import {AccountParams} from '@resource/account'
import {update} from '@fire/update'
import {error} from '@fire/error'

const onCreatePaymentLink = async (
  values: CreateCheckoutResource,
  axiosInstance: AxiosInstance,
) => {
  const {data, status} = await axiosInstance.post<PaymentResponse>(
    url,
    values
  )
  return {data, status}
}

export const createPaymentLink = async (
  values: typeof AccountParams,
  id: string
) => {
  const axiosInstance = createAxiosInstance(config)
  const data = transform(values)

  const Err = (err: Error) => {
    error({...err, id: data.external_id})
  }
  const Ok = (response: any) => {
    if (response.status === 200) {
      update(response.data, id)
      return response
    }
  }

  return await onCreatePaymentLink(data, axiosInstance).then(Ok, Err)
}
