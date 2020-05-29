console.log("************** DELIVERABLE 01 *********************");
console.log("************** ARRAY OPERATIONS *******************");

const listNumbers = [1,2,3,4,5];
const listPersons = ["Ana","Maria","Antonio", "Pedro"];
// ----------------------------Head------------------------------------------
// Implementa una función head (inmutable), tal que, dado un array como entrada
// extraiga y devuelva su primer elemento. Utiliza destructuring

const head = ([first]: number[]|string[]) => first;
console.log("head", head(listNumbers));
console.log("head", head(listPersons));

// ----------------------------Tail------------------------------------------
// Implementa una función tail (inmutable), tal que, dado un array como entrada 
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([,...elements]: number[]|string[]) => elements;
console.log("Tail", tail(listPersons));
console.log("Tail", tail(listNumbers));

// ----------------------------Init------------------------------------------
// Implementa una función init (inmutable), tal que, dado un array como 
// entrada devuelva todos los elementos menos el último. 
// Utiliza los métodos que ofrece Array.prototype.

const init = (items: number[]|string[]) =>{   
    return items.slice(0,-1);
}
console.log("Init", init(listNumbers));
console.log("Init", init(listPersons));

// ----------------------------Last------------------------------------------
// Implementa una función last (inmutable), tal que, dado un array como 
// entrada devuelva el último elemento.
const last = (items: number[]|string[]) =>{   
    return items[items.length-1];
}
console.log("Last", last(listNumbers));
console.log("Last", last(listPersons));