import { t } from 'elysia'

export const AccountParams = t.Object({
	agent_name: t.String({ maxLength: 25 }),
	amount: t.String({ minLength: 3 }),
	assured_name: t.String({ minLength: 3, maxLength: 25 }),
	email: t.String({ format: 'email' }),
	fee_amount: t.String({ minLength: 3 }),
	fee_type: t.String(),
	given_names: t.String({ maxLength: 35 }),
	iso_number: t.String({ maxLength: 8, minLength: 8 }),
	item_category: t.String(),
	item_name: t.String(),
	item_price: t.String(),
	item_quantity: t.String(),
	mobile_number: t.String(),
	policy_number: t.String(),
	surname: t.String(),
})

export const Individual = t.Object({
	given_names: t.String({ maxLength: 35, minLength: 1 }),
	surname: t.Nullable(t.String({ maxLength: 35, minLength: 1 })),
	email: t.Nullable(t.String({ maxLength: 35, format: 'email' })),
	mobile_number: t.Nullable(t.String({ maxLength: 13, minLength: 10 })),
})

export const Notification = t.Union(t.TemplateLiteral('email|whatsapp'))

export const LineItem = t.Object({
	name: t.String({ maxLength: 25 }),
	category: t.Nullable(t.String({ maxLength: 25 })),
	price: t.Nullable(t.Number({ minLength: 3 })),
	quantity: t.Nullable(t.Number({ maxLength: 4 })),
})

export const Fees = t.Object({
	type: t.Union(t.TemplateLiteral('Delivery')),
	value: t.Number(),
})

export const PaymentShape = t.Object({
	external_id: t.String({ minLength: 1 }),
	amount: t.Number({ minimum: 100 }),
	currency: t.String({ maxLength: 3, minLength: 3 }),
	customer: Individual,
	customer_notification_preference: t.Object({
		invoice_paid: t.Array(Notification),
	}),
	success_redirect_url: t.Nullable(t.String()),
	failure_redirect_url: t.Nullable(t.String()),
	items: t.Nullable(t.Array(LineItem)),
	fees: t.Nullable(Fees),
})

export type AccountType = 'INDIVIDUAL'
export interface Individual {
	given_names: string
	surname: string
}
export interface CreateAccountResource {
	reference_id: string
	type: AccountType
	individual_detail: Individual
	email: string
	mobile_number: string //+6309001235678
}

export interface AccountResource {
	id: string
	reference_id: string
	given_names: string
	email: string
	mobile_number: string | null
	description: string | null
	middle_name: string | null
	surname: string | null
	phone_number: string | null
	nationality: string | null
	date_of_birth: string | null
	metadata: string | null
	employment: string | null
	addresses: string | null
	source_of_wealth: string | null
}

export interface IndividualDetail {
	given_names: string
	given_names_non_roman: string
	surname: string
	surname_non_roman: string
	nationality: string
	date_of_birth: string
	place_of_birth: string
	gender: string
	employment: string
}

export interface AccountResponseResource {
	type: AccountType
	date_of_registration: null
	email: string
	mobile_number: string
	phone_number: string
	created: string
	updated: string
	description: string
	hashed_phone_number: string
	domicile_of_registration: string
	kyc_documents: any[]
	id: string
	reference_id: string
	metadata: Record<string, any>
	individual_detail: IndividualDetail
	business_detail: any
	addresses: any[]
	identity_accounts: any[]
}
export const url = '/customers'
