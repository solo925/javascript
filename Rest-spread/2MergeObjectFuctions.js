/**
 * Merges multiple objects into a single object.
 *
 * @param {...Object} objs - variable number of objects to merge
 * @return {Object} a new object containing all properties from the input objects
 */
function mergeObjects(...objs) {

    // marging
    const objectMergerged = { ...obj1, ...obj2 };
    return objectMergerged;
    
}

const obj1 = {a:1,b:2}
const obj2 = { b: 3, c: 4 } 

console.log(mergeObjects(obj1, obj2));
