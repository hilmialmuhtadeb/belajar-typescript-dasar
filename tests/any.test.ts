describe('Any', function() {
  it ('should support in typescript', function () {
    const person: any = {
      id: 1,
      name: 'Dzakiya',
      age: 21,
    }

    person.address = 'Manukan, Surabaya'
  })
})