//Given a string of words or phrases, count the number of vowels

function countVowels(str){
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let count = 0
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase()
    if (vowels.has(char)) {
      count++
    }
  }
  return count
}

console.log(countVowels(123));

module.exports = countVowels;