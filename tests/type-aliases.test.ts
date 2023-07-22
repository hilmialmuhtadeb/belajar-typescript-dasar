import { Category, Product } from "../src/type-aliases"

describe('Type Aliases', function() {
  it('should support in typescript', function() {
    const drink: Category = {
      id: 1,
      name: 'Drink'
    }
  
    const fruitTea: Product = {
      id: 1,
      name: 'Fruit Tea',
      price: 6000,
      category: drink
    }

    // fruitTea.description = 'test' -> error, description doesn't exist in type Product 

    console.info(drink)
    console.info(fruitTea)
  })
})