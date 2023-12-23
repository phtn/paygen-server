import {describe, expect, it} from "bun:test";
import {createInvoiceNumber, createReferenceNumber, formatMobile} from "@utils";

describe('Utilities', () => {

  it('Returns Correct Mobile Format', () => {
    const mobile_numbers: string[] = ['09156984277', '9164446666', '639163335249']
    const f = mobile_numbers.map(item => formatMobile(item));

    expect(f).toEqual(['+639156984277', '+639164446666', '+639163335249'])

    const emptyString = formatMobile('')
    expect(emptyString).toEqual('')
  })

  it('Generates Invoice Number', () => {
    const invoice_number = createInvoiceNumber()

    expect(invoice_number).toBeTypeOf('string')
    expect(invoice_number.substring(0, 3)).toEqual('INV')
  })

  it('Generates Reference Number', () => {
    const reference_number = createReferenceNumber()

    expect(reference_number).toBeTypeOf('string')
    expect(reference_number.substring(0, 3)).toEqual('PGN')
  })
})
