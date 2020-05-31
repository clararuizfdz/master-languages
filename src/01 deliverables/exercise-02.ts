console.log("************** DELIVERABLE 02 *********************");
console.log("****************** Concat *************************");

// Implementa una función concat (inmutable) tal que, dados 2 arrays como
// entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = <T, H>(a: T[], b: H[]) => [...a, ...b];
console.log("Concat:", concat([1, 2, 3], [4, 5, 6]));

// Implementa una versión del ejercicio anterior donde se acepten múltiples
// arrays de entrada (más de 2).
const concatMultiple = (...args: any[][]) => args.reduce(concat);
console.log("ConcatMultiple:", concatMultiple([1, 2, 3], [4, 5, 6], [7, 8, 9]));