console.log("************** PRACTICE *********************");
console.log("************** PRIMES *********************");
function primes(from, to){
  for(var i=from; i<= to; i++)  {
    if(isPrime(i)){
        console.log(i, "is PRIME!");
    }
    else{
        console.log(i, "is not a prime");
    }
  }
}

function isPrime(num){
    if (num<=1){
        return false;
    }
    var limit = Math.sqrt(num);

    for(var i=2; i <= limit; i++){
        if(num % i ===0){
            return false;
        }
    }
    return true;
}

primes(1,100);