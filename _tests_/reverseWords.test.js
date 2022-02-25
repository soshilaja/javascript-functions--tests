const reverseWords = require('./reverseWords');

describe("This function reverses strings input", () => {
   it('returns a reversed string', () => {
       expect(reverseWords('I Love You')).toBe('uoY evoL I')
   });

   it('when string is one word it returns the reverse', () => {
        expect(reverseWords('Like')).toBe('ekiL')
   });

   it('Returns undefined', () => {
       expect(reverseWords(Like)).toBeUndefined()
   });

//    it('when args is an undefined variable', () => {
//     expect(hypotenuse(a,4)).toBeUndefined()
//     });
});