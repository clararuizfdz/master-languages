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