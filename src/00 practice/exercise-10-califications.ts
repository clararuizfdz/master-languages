console.log("************** JAVASCRIPT FUNDAMENTALS *********************");
console.log("************** CALIFICATIONS *********************");
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
  
  const getResults = <T>(obj: T): any[] => Object.values(obj);

  const printAverage = <T>(classResults: T): string => {
    const results = getResults(classResults);
    const average = calculateAverage(results);
    const averageOfClass = map.get(Math.trunc(average));
    return averageOfClass;
  };
  
  console.log("PrintAverage:", printAverage(eso2o));