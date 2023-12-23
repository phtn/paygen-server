import {describe, expect, it} from "bun:test";
import {AccountParams} from "@resource/account";

describe('Routers', () => {

  it('Account Accepts Correct Params', () => {

    const values = {
      agent_name: '',
      amount: '',
      assured_name: '',
      email: '',
      fee_amount: '',
      fee_type: '',
      given_names: '',
      iso_number: '',
      item_category: '',
      item_name: '',
      item_price: '',
      item_quantity: '',
      mobile_number: '',
      policy_number: '',
      surname: '',
    }

    expect(values).toBeTypeOf(typeof AccountParams)
  })
})
