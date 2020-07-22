const mydeepAccessObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

function deepGet(deepObject, ...property) {
    if (property.length === 0) {
        return deepObject;
    } else if (property.length === 1) {
        const {
            [property]: result
        } = deepObject;
        return result;
    } else {
        const [first, ...rest] = property;
        const {
            [first]: r2
        } = deepObject;
        return deepGet(r2, ...rest);
    }


}

console.log("DeepGet:", deepGet(mydeepAccessObject, "a")); // 1
console.log("DeepGet:", deepGet(mydeepAccessObject, "b")); // { c: null, d: {....}}

console.log("DeepGet:", deepGet(mydeepAccessObject, "b", "c")); // null

console.log("DeepGet:", deepGet(mydeepAccessObject, "b", "d", "f", "g")); // bingo
console.log("DeepGet:", deepGet(mydeepAccessObject)); // 1
