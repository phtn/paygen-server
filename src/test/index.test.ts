import {describe, expect, it} from "bun:test";
import {Elysia} from "elysia";

describe('Init PayGen', () => {
  it('returns a response', async () => {
    const app = new Elysia()
      .get('/', () => 'Elysia + tRPC + Firebase')

    const response = await app
      .handle(new Request('http://localhost:8080'))
      .then(res => res.text())

    expect(response).toEqual('Elysia + tRPC + Firebase')
  })
})