 //Convert Meter to Feet in Measurement
  function meterToFeet(meter){
    return (meter / 0.3048).toFixed(2)
  }
  
  console.log(meterToFeet('abc'))

  module.exports = meterToFeet;