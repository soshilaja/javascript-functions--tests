//conversion of decimal to binary

function decimalToBinary(num){
    const bin = []
    while (num > 0) {
      bin.unshift(num % 2)
      num >>= 1
    }
    return bin.join('')
  }
  
console.log(decimalToBinary(100))

  module.exports = decimalToBinary;