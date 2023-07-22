describe('Function', () => {

  it('should support optional param in function', () => {
    const sayHello = (name?: string) : string => `Hello ${name || ''}!`

    expect(sayHello('Hilmi')).toBe('Hello Hilmi!')
    expect(sayHello()).toBe('Hello !')
  })

  it('should support default param in function', () => {
    const sayHello = (name: string = 'Dzakiya TerCakep Sedunia') : string => `Hello ${name}!`

    expect(sayHello('Hilmi')).toBe('Hello Hilmi!')
    expect(sayHello()).toBe('Hello Dzakiya TerCakep Sedunia!')
  })

  it('should support rest param in function', () => {
    const sum = (...numbers: number[]) : number => numbers.reduce((a, b) => a + b, 0)

    expect(sum(1, 2, 3)).toBe(6)
  })

  it ('should support function as parameter', () => {
    const add = (a: number, b: number): number => a + b
    const multiple = (a: number, b: number): number => a * b

    const calculate = (fn: (a: number, b: number) => number, a: number, b: number): number => fn(a, b)

    expect(calculate(add, 1, 2)).toBe(3)
    expect(calculate(multiple, 1, 2)).toBe(2)
  })
  
})