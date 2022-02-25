//This function converts Temperature in Celsius to Fahrenheit


function celsiusToFahrenheit(celsius){
  return Math.round(((celsius) * 9 / 5) + 32)
}

// console.log(celsiusToFahrenheit('abc'));

module.exports = celsiusToFahrenheit;