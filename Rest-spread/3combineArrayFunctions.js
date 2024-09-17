function combineArrays(...arrays) {
    // Store unique values using sets
    let mySetValues = new Set();

    arrays.forEach(array => {
        array.forEach(element => {
            mySetValues.add(element);
        });
    });

    // Convert the Set back to an array
    return [...mySetValues];
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];
let results = combineArrays(arr1, arr2, arr3);
console.log(results);
