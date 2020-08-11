console.log("***************** FLATTEN ARRAY **********************");

interface DeepArray<T> extends Array<T | DeepArray<T>>{};

type Deep<T> = T | DeepArray<T>;

const flattenArray = <T>(multiArray: Deep<T>):T[] => {
    console.log(typeof(multiArray));
    return multiArray.reduce((acc:T[], value:Deep<T>) =>
        Array.isArray(value) ?
        acc.concat(flattenArray(value)) :
        acc.concat(value), []
    );
}



const sample: Deep<number>[] = [1, [2, 3],
    [
        [4],
        [5, 6, [7, 8, [9]]]
    ]
];

console.log("Flatten Array", flattenArray<number>(sample));