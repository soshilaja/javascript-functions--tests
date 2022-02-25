const meterToFeet = require ('./meterToFeet');

describe("This function converts meter to feet", () => {
    
    it('should return the value in feet', () => {
      expect(meterToFeet(1.88)).toBe('6.17')
    })
    
    it('should return NaN for empty args', () => {
      expect(meterToFeet()).toBe('NaN')
    })

    it('should return NaN for string args', () => {
        expect(meterToFeet('abc')).toBe('NaN')
      })
});