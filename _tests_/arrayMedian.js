//Check the median of an array of Numbers

function arrayMedian(Numbers){
    let numbers = [...Numbers]
    let median = 0
    const numLength = numbers.length
    numbers = numbers.sort(sortNumbers)
  
    if (numLength % 2 === 0) {
      median = (numbers[numLength / 2 - 1] + numbers[numLength / 2]) / 2
    } else {
      median = numbers[(numLength - 1) / 2]
    }
  
    return median
  }
  
  const sortNumbers = (num1, num2) => {
    return num1 - num2
  }
  
  console.log(arrayMedian([15, 18, 3, 9, 13, 5]));

  //2,5,8,9,10,11

  module.exports = arrayMedian;