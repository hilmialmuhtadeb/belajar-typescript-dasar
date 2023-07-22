describe('Union', function() {
  it ('should support in typescript', function() {
    let balance : number | string = 100;
    // valid in union data type
    balance = 'empty'
    // balance = true -> invalid because boolean not mentioned
    
    console.info(balance)
  })
})