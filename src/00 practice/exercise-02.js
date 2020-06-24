console.log("************** PRACTICE *********************");
console.log("************** INCLUDES *********************");
function includes(array, value){
    var i = 0;
    var isInclude = false;
    while(i<array.length && !isInclude){
        if(array[i]===value){
            isInclude = true;
        }
        i++;
    }
    return isInclude;
}

console.log("Includes ES5:", includes([1, 2, 3], 3)); 
console.log("Includes ES5:", includes([1, 2, 3], 0));

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

console.log("************** PRACTICE *********************");
console.log("************** REVERSE TEXT *********************");
function reverseText(text){
    var reverseString = text.split(" ").reverse().join(" ");
    return reverseString;
}

console.log("Reverse Text: ", reverseText("hola como estas"));

console.log("************** PRACTICE *********************");
console.log("************** SUBSETS *********************");
function subsets(word){
    // var arraySet = new Array();
    // for(var i=0; i< word.length +1 ; i++){
    //     word = word.substring(1,word.length);
    //     arraySet.push(word);
    // }
    // return arraySet;
    return Array.from(word, x => word = word.substring(1, word.length));
}

console.log("Subsets:", subsets("message"));

console.log("************** PRACTICE *********************");
console.log("************** VALUES *********************");
function values(obj){
    return Object.values(obj);
}

console.log("Values:", values({ id: 31, duration: 310, name: "long video", format: "mp4" }));

console.log("************** PRACTICE *********************");
console.log("************** ZIP *********************");
function zipObject(keys, values) {
    const map = new Map(keys, values);    
    return map.set("hola", "adios");

  }
  
  // Ejemplo
  console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"]));