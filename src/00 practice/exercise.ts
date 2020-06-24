console.log("************** PRACTICE *********************");
console.log("Use folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");
console.log("************** JAVASCRIPT FUNDAMENTALS *********************");

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

// VALUES
// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:
const values = <T>(obj: T): any[] => Object.values(obj);
console.log(
  "Values:",
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
);

// CALIFICATIONS
// Dada la calificación de alumnos de una clase en forma de objeto, Implementa una función que muestre la media de
// la clase de forma textual, es decir, siguiendo el sistema de calificación español:
// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8
};

const map = new Map<number, string>();
map.set(10, "Matrícula de Honor");
map.set(9, "Sobresaliente");
map.set(8, "Notable");
map.set(7, "Notable");
map.set(6, "Bien");
map.set(5, "Suficiente");
map.set(4, "Insuficiente");
map.set(3, "Muy deficiente");
map.set(2, "Muy deficiente");
map.set(1, "Muy deficiente");
map.set(0, "Muy deficiente");
const reducer = (accumulator: number, currentValue: number) =>
  accumulator + currentValue;

const calculateAverage = (califications: number[]): number => {
  const numberOfResults = califications.length;
  const average = califications.reduce(reducer) / numberOfResults;
  return average;
};

const printAverage = <T>(classResults: T): string => {
  const results = values(classResults);
  const average = calculateAverage(results);
  const averageOfClass = map.get(Math.trunc(average));
  return averageOfClass;
};

console.log("PrintAverage:", printAverage(eso2o));

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

const f = <T>(input):string => input===undefined ? "Unknown": (input===null ? "":input);
const aF:string = null;
const bF:any = undefined;
const cF:string ="constante";
console.log("F:"+ f(aF));
console.log("F:"+ f(bF));
console.log("F:"+ f(cF));


//DICES
// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y 
// encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:
// Hacer reset, poner a undefined o null ambos resultados.
// Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// Imprimir el resultado por consola. Ten en cuenta lo siguiente:
// Informa al usuario que debe tirar primero cuando corresponda.
// Si saca doble 6, ¡dale un premio!

class Dices{
  private result: number[];
  
  constructor(){
      this.result = [undefined,undefined];
  }

  public reset(){
    this.result = [undefined,undefined];
  }

  public play(){
     const dice1 = Math.floor(Math.random()*6) +1;
     const dice2 = Math.floor(Math.random())*6 +1;
    this.result = [dice1,dice2];
    if (dice1 ===6 && dice2===6 ){
      console.log("Congrats! You win our special prize! You got", this.result);
    }
    else{
      console.log("You got", this.result);
    }
  }
}
const dices = new Dices();
dices.play();
dices.reset();
dices.play();
dices.reset();
dices.play();
dices.reset();
dices.play();
dices.reset();
dices.play();

