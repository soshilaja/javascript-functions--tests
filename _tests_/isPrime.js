//Function checks if a given number si a prime number

function isPrime(n){
    if (isNaN(n)){
     return false;   
    }else if (n===1){
    return false;
  }else if(n === 2){
    return true;
  }else{
      for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(isPrime('abs'));

console.log(!isNaN('10a'))

module.exports = isPrime;
