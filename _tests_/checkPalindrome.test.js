const checkPalindrome = require('./checkPalindrome');

describe("testing if a given string is palindromic", () => {
   it('returns true if a given string arg is a palindrome', () => {
       expect(checkPalindrome('121')).toBe('true')
   });

   it('should return "Not a String" if  string is !string', () => {
        expect(checkPalindrome(121)).toBe('Not a string')
   });

    it('should return "Empty String" if  string is ""', () => {
        expect(checkPalindrome('')).toBe('Empty string')
    });

});