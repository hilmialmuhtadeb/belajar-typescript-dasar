import { sayHello } from "../src/say-hello"

describe('sayHello', function() : void {
  it('should return hello + name', function() : void {
    expect(sayHello('Hilmi')).toBe('Hello Hilmi');
  })
})