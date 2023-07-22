describe('If', () => {

  it('should be the same with javascript', () => {
    const score: number = 80
    let grade: string = ''

    if (score >= 80) {
      grade = 'A'
    }

    expect(grade).toBe('A')
  })
  
  it('should support ternary operator', () => {
    const score: number = 80
    const grade: string = score >= 80 ? 'A' : 'B'

    expect(grade).toBe('A')
  })
  
})