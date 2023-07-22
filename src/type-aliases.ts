export type Category = {
  id: number,
  name: string
}

export type Product = {
  id: number,
  name: string,
  price: number,
  category: Category
}

const snack : Category = {
  id: 1,
  name: 'Snack'
}

const chips : Product = {
  id: 1,
  name: 'Chips',
  price: 1000,
  category: snack
}