/**
 * Filters and sorts the provided arguments based on the given filter function.
 *
 * @param {function} filterfn - A function used to filter the arguments.
 * @param {...*} arg - Variable number of arguments to be filtered and sorted.
 * @return {array} The filtered and sorted array of arguments.
 */
function filterandSort(filterfn, ...arg) {

    // removing the forst elemnt filtering sorting and returning te value
    let result = arg.slice(1).filter(filterfn).sort();
    return result;
}
 
const isEven = number => number % 2 === 0;
let result = filterandSort(isEven,5,3,8,6,2);

console.log(result);
