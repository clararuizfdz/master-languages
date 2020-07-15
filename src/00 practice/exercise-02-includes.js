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








