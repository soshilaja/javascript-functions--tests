const avgArray = require('./avgArray');

describe("testing the average Array function", () => {
    
    it('when array !numbers', () => {
    expect(avgArray([3,'a',5,6,77,'c'])).toBe(NaN)
    });
    it('should return mean of an array of numbers', () => {
        expect(avgArray([1,2,3,4,5,6])).toBe(3.5)
    });
   it('should return NaN for an empty Array', () => {
    expect(avgArray([])).toBeNaN()
    });
   it('returns NaN with empty args', () => {
       expect(avgArray()).toThrow()
   })

 });