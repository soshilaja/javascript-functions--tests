const sum = require('./sum');

describe("testing the sum function", () => {
    
    it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    });

    it('when one arg is NaN', () => {
        expect(sum('a',4)).toBe("a4")
   });

   it('when args is NaN', () => {
    expect(sum('a', 'a')).toBe("aa")
    });

   it('when args is empty', () => {
       expect(sum()).toBeNaN()
   });

 });
