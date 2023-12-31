export interface Customer {
  given_names: string | null
  surname: string | null
  email: string | null
  mobile_number: string | null // starts with +63,
}

export type Notification = 'email' | 'whatsapp'

export interface LineItem {
  name: string | null
  quantity: number
  price: number // in cents,
  category: string | null
}

export interface Fees {
  type: 'Delivery'
  value: number // in cents,
}

export interface CreateCheckoutResource {
  external_id: string // defined,
  amount: number // in cents,
  currency: string
  customer?: Customer
  customer_notification_preference?: {
    invoice_paid: Notification[]
  }
  success_redirect_url?: string | null
  failure_redirect_url?: string | null
  items?: LineItem[]
  fees?: Fees[]
}

export interface PaymentResponse {
  id: string
  external_id: string
  user_id: string
  status: string
  merchant_name: string
  merchant_profile_picture: string
  amount: number
  expiry_date: string
  invoice_url: string
  avalailable_banks: string[]
  available_retail_outlets: Record<string, string>[]
  available_ewallets: Record<string, string>[]
  available_qr_codes: Record<string, string>[]
  available_direct_debits: Record<string, string>[]
}


export interface PaymentResponseData {
  data: {
    id: string
    external_id: string
    user_id: string
    status: string
    merchant_name: string
    merchant_profile_picture: string
    amount: number
    expiry_date: string
    invoice_url: string
    avalailable_banks: string[]
    available_retail_outlets: Record<string, string>[]
    available_ewallets: Record<string, string>[]
    available_qr_codes: Record<string, string>[]
    available_direct_debits: Record<string, string>[]
  }
}

export const url = '/v2/invoices'
