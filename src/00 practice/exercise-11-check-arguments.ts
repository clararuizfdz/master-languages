console.log("************** JAVASCRIPT FUNDAMENTALS *********************");
console.log("************** CHECK ARGUMENTS *********************");
// Check Arguments
// Es muy habitual en javascript, al recibir argumentos de una función, 
// querer asegurarnos de que no sean undefined o null. 
// En este ejercicio debes convertir el código de abajo en algo 
// equivalente pero más compacto y expresivo.
// function f1(input) {
//     var result;
//     if (input === undefined) {
//       result = "Unknown";
//     } else if (input === null) {
//       result = "";
//     } else {
//       result = input;
//     }
//     return result;
//   }

const checkArguments = <T>(input):string => input===undefined ? "Unknown": (input===null ? "":input);
const aF:string = null;
const bF:any = undefined;
const cF:string ="constante";
console.log("CheckArguments:"+ checkArguments(aF));
console.log("CheckArguments:"+ checkArguments(bF));
console.log("CheckArguments:"+ checkArguments(cF));