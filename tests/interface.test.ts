import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/seller"

describe('Interface', function() {
  it('should support support readonly', function() {
    const bryanToysShop: Seller = {
      id: 1,
      name: 'Bryan Toys Shop',
      address: 'Jl. Jendral Sudirman No. 1',
      nib: '1234567890',
      npwp: '0987654321'
    }

    bryanToysShop.address = 'Pakal, Surabaya'
    console.info(bryanToysShop)

    expect(bryanToysShop.id).toBe(1)
  })

  it('should support function interface', function() {
    interface Adder {
      (a: number, b: number): number
    }

    const add: Adder = (a, b) => a + b
    expect(add(1, 2)).toBe(3)
  })

  it ('should support indexable interface', function() {
    interface StringArray {
      [index: number]: string
    }

    const names: StringArray = ['Hilmi', 'Dzakiya']

    console.info(names)
    expect(names[1]).toBe('Dzakiya')
  })

  it('should support indexable interface for non-number index', function() {
    interface Dictionary {
      [index: string]: string
    }

    const dictionary: Dictionary = {
      name: 'Dzakiya',
      address: 'Indonesia'
    }

    console.info(dictionary)
    expect(dictionary['name']).toBe('Dzakiya')
  })

  it('should support extended interface', function() {
    const employee: Employee = {
      id: 1,
      name: 'Hilmi',
      division: 'IT',
    }

    const manager: Manager = {
      id: 2,
      name: 'Dzakiya',
      division: 'IT',
      numberOfEmployees: 1
    }

    console.info(manager)
    expect(manager.id).toBe(2)
  })

  it('should support function in interface', function() {
    interface Person {
      name: string,
      sayHello(name: string): string
    }

    const hilmi: Person = {
      name: 'Hilmi',
      sayHello(name: string): string {
        return `Hello ${name}!`
      }
    }

    console.info(hilmi.sayHello('Dzakiya'))
    expect(hilmi.sayHello('Dzakiya')).toBe('Hello Dzakiya!')
  })

  it('should support intersection type', function() {
    interface hasName {
      name: string
    }

    interface hasAddress {
      address: string
    }

    type Person = hasName & hasAddress
    const person: Person = {
      name: 'Hilmi',
      address: 'Indonesia'
    }

    console.info(person)
    expect(person.name).toBe('Hilmi')
  })
})