const rot13 = require ('./rot13');

describe("This function converts decimal to binary", () => {
    
    it('should return the binary value of the decimal', () => {
      expect(rot13('I am so cool')).toBe('V nz fb pbby')
    })
    
    it('should return number for number args', () => {
      expect(rot13('123')).toBe('123')
    })
});