const decimalToBinary = require ('./decimalToBinary');

describe("This function converts decimal to binary", () => {
    
    it('should return the binary value of the decimal', () => {
      expect(decimalToBinary(22)).toBe('10110')
    })
    
    it('should return NaN for empty args', () => {
      expect(decimalToBinary(0)).toBe("")
    })

    it('should return the binary value of the decimal', () => {
        expect(decimalToBinary(100)).toBe('1100100')
      })
});