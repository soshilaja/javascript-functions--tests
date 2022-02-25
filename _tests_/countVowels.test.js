const countVowels = require('./countVowels');

describe('Counting the number of vowels in a given string', () => {
    
    it('returns the number of vowels', () => {
        expect(countVowels('Hello')).toBe(2)
      })
    
    it('expect errors on use of wrong argument', () => {
      expect(countVowels(0)).toThrow('value must be a function')
    })
  
    it('return 0 when there are no vowels', () => {
      expect(countVowels('Rhythm')).toBe(0)
    })
  
    it('expect 0 if input is an empty string', () => {
      expect(countVowels('')).toBe(0)
    })
  })