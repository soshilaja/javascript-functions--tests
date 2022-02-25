//Function to encrypt text messages with ROT13 cipher

function rot13(text){
    const originalCharacterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const toBeMappedCharaterList = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    const index = x => originalCharacterList.indexOf(x)
    const replace = x => index(x) > -1 ? toBeMappedCharaterList[index(x)] : x
    return text.split('').map(replace).join('')
  }
  

// console.log(rot13('123'))

  module.exports = rot13;