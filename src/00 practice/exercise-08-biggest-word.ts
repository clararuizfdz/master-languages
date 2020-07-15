console.log("************** JAVASCRIPT FUNDAMENTALS *********************");
console.log("************** BIGGEST WORD *********************");
// BIGGEST WORD
// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
// En caso de haber varias con longitud máxima que devuelva siempre la primera.
// Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
const largestWord = (longest: string, currentWord: string): string => {
    return currentWord.length > longest.length ? currentWord : longest;
  };
  
  const biggestWord = (phrase: string): string => {
    const words = phrase.split(" ");
    return words.reduce(largestWord);
  };
  
  console.log(
    "BiggestWord:",
    biggestWord("Esta frase puede contener muchas palabras")
  );
  console.log("BiggestWord:", biggestWord("Ejercicios básicos de JavaScript"));