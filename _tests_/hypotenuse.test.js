const hypotenuse = require('./hypotenuse');

describe("testing hypotenuse function", () => {
   it('adds the square of two numbers and returns the squareroot', () => {
       expect(hypotenuse(3,4)).toBe(5)
   });

   it('returns NaN when args isNaN', () => {
        expect(hypotenuse('a',4)).toBe(NaN)
   });

   it('returns NaN when args is empty', () => {
       expect(hypotenuse()).toBe(NaN)
   });
});