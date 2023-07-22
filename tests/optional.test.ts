import { sayHello } from "../src/optional"

describe('Optional', () => {
  it('should support null and undefined', () => {
    expect(sayHello('Hilmi')).toBe('Hello Hilmi!')

    const name: string | undefined = undefined
    expect(sayHello(name)).toBe('Hello!')
    expect(sayHello(null)).toBe('Hello!')
  })
})