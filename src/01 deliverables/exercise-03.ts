console.log("************** DELIVERABLE 03 *********************");
console.log("************** CLONE-MERGE *********************");

// ----------------------------Clone------------------------------------------
// Implementa una función clone que, a partir de un objeto de entrada
// source devuelva un nuevo objeto con las propiedades de source
interface Address {
  street: string;
  number: number;
  city: string;
  country: string;
}

interface Person {
  name: string;
  address: Address;
}

const maria: Person = {
  name: "Maria",
  address: {
    street: "Campos",
    number: 2,
    city: "Malaga",
    country: "Spain"
  }
};

const clone = <T>(source:T) => ({...source});

console.log("Clone:", clone(maria));

const cloneDeep = <T>(source:T) => JSON.parse(JSON.stringify(source));
console.log("CloneDeep:", cloneDeep(maria));

// ----------------------------Merge------------------------------------------
// Implementa una función merge que, dados dos objetos de entrada source
// y target, devuelva un nuevo objeto con todas las propiedades de target
// y de source, y en caso de propiedades con el mismo nombre, source
// sobreescribe a target.
const merge = <T, G >(source: T, target: G): T&G => ({...target, ...source});


const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log("Merge:", merge(a,b));

const mergeDeep = <T,G>(source: T, target: G): T&G =>{
    const sourceDeepClone = cloneDeep(source);
    const targetDeepClone = cloneDeep(target);
    return {...targetDeepClone, ...sourceDeepClone};
}
console.log("MergeDeep:", mergeDeep(a,b));