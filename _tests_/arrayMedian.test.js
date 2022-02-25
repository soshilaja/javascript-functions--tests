const arrayMedian = require ('./arrayMedian');

describe("This function returns the media of a set of Numbers", () => {
    
    it('should return the median of an array of numbers', () => {
      expect(arrayMedian([1, 2, 6, 4, 5])).toBe(4)
    })
    
    it('should return the median of an array of numbers where the length is an even number', () => {
      expect(arrayMedian([8, 9, 2, 5, 10, 11])).toBe(8.5)
    })
});

