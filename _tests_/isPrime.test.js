const isPrime = require ('./isPrime');

describe("This function checks prime numbers", () => {
    
    it('should return return true for 37', () => {
      expect(isPrime(37)).toBe(true)
    })
    
    it('should return false for 10', () => {
        expect(isPrime(10)).toBe(false)
    })

    it('should return false for 10a', () => {
        expect(isPrime('10a')).toBe(false)
    })

    it('should return return true for 37', () => {
        expect(isPrime('37')).toBe(true)
      })
});