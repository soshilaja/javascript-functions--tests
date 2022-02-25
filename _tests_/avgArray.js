  // This function sums all values in the array using the reduce Method
  // Divide sum by the length of the array.


  function avgArray(nums){
      const sum = nums.reduce((sum, cur) => sum + cur, 0);
      return sum / nums.length;
}

// console.log(avgArray([]));

module.exports = avgArray;