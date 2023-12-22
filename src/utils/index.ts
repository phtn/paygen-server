import {v4 as uuidv4} from 'uuid'

export const createInvoiceNumber = (): string => {
    const regex = /-(.*)-/
    const uid = uuidv4()

    const match = uid.match(regex)
    if (match && match.length > 1) {
        const stringBetweenDashes = match[1]
        return `INV-${stringBetweenDashes}`

    } else {
        return `INV-${uid.substring(0, 13)}`

    }
}

export const createReferenceNumber = () => {
    const regex = /-(.*)-/
    const uid = uuidv4()

    const match = uid.match(regex)
    if (match && match.length > 1) {
        const stringBetweenDashes = match[1]
        return `PGN-${stringBetweenDashes}`
    } else {
        return `PGN-${uid.substring(0, 13)}`
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
