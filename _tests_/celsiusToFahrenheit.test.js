const celsiusToFahrenheit = require ('./celsiusToFahrenheit');

describe("This function converts celsius to fahrenheit", () => {
    
    it('should return the value in Fahrenheit', () => {
      expect(celsiusToFahrenheit(100)).toBe(212)
    })
    
    it('should return NaN for empty args', () => {
      expect(celsiusToFahrenheit()).toBeNaN()
    })

    it('should return NaN for string args', () => {
        expect(celsiusToFahrenheit('xyz')).toBeNaN()
      })
});