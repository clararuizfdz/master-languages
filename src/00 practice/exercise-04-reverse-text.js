console.log("************** PRACTICE *********************");
console.log("************** REVERSE TEXT *********************");
function reverseText(text){
    var reverseString = text.split(" ").reverse().join(" ");
    return reverseString;
}

console.log("Reverse Text: ", reverseText("hola como estas"));