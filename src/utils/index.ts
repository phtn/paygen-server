import { v4 as uuidv4 } from 'uuid'
import { t } from 'elysia'

const InvoiceNumber = t.String({ minLength: 1 })

export const createInvoiceNumber = (): string => {
	const regex = /-(.*)-/
	const uid = uuidv4()

	const match = uid.match(regex)
	if (match && match.length > 1) {
		const stringBetweenDashes = match[1]
		const inv_id = `INV-${stringBetweenDashes}`
		return inv_id
	} else {
		const inv_id = `INV-${uid.substring(0, 13)}`
		return inv_id
	}
}

export const createReferenceNumber = () => {
	const regex = /-(.*)-/
	const uid = uuidv4()

	const match = uid.match(regex)
	if (match && match.length > 1) {
		const stringBetweenDashes = match[1]
		const inv_id = `PGN-${stringBetweenDashes}`
		return inv_id
	} else {
		const inv_id = `PGN-${uid.substring(0, 13)}`
		return inv_id
	}
}

export const formatMobile = (mobile_number: string) => {
	const regex = /^0|^(63)|\D/g
	if (mobile_number) {
		const formattedNumber = mobile_number.replace(regex, '')
		return `+63${formattedNumber}`
	}
	return ''
}
