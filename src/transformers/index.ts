import {
  createInvoiceNumber,
  createReferenceNumber,
  formatMobile,
} from '@utils'
import {AccountParams, CreateAccountResource} from '@resource/account'

export const shapePayment = (values: typeof AccountParams) => {
  const {
    amount,
    given_names,
    surname,
    email,
    mobile_number,
    iso_number,
    policy_number,
    assured_name,
    item_category,
    item_quantity,
  } = values

  const customer = {
    given_names,
    surname,
    email,
    mobile_number: formatMobile(mobile_number),
  }
  return {
    external_id: createInvoiceNumber(),
    amount: +amount,
    currency: 'PHP',
    customer,
    items: [
      {
        name: `${iso_number} · ${policy_number} · ${assured_name}`,
        category: item_category as string,
        price: +`${amount}`,
        quantity: +`${item_quantity}`,
      },
    ],
  }
}

export const shapeAccount = (values: typeof AccountParams) => {
  const {given_names, surname, email, mobile_number} = values
  const data: CreateAccountResource = {
    reference_id: createReferenceNumber(),
    type: 'INDIVIDUAL',
    individual_detail: {
      given_names,
      surname,
    },
    email,
    mobile_number: formatMobile(mobile_number),
  }
  return data
}
