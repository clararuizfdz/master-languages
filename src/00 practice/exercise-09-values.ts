console.log("************** JAVASCRIPT FUNDAMENTALS *********************");
console.log("************** VALUES PROPERTIES *********************");
// VALUES
// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:
const valuesProperties = <T>(obj: T): any[] => Object.values(obj);
console.log(
  "Values:",
  valuesProperties({ id: 31, duration: 310, name: "long video", format: "mp4" })
);