describe('Array', function () {
  it ('should same with js', function () {
    const names: string[] = ['Hilmi', 'Dzakiya']
    const ages: number[] = [22, 21]
    
    console.info(names)
    console.info(ages)
  })
  it ('should support readonly array', function () {
    const arr: ReadonlyArray<string> = ['a', 'b', 'c'];
    // arr.push('d'); // Error: Property 'push' does not exist on type 'readonly string[]'.

    console.info(arr);
  })
})
