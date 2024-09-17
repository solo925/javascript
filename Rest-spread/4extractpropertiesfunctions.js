/**
 * Extracts specified properties from an array of objects.
 *
 * @param {Object[]} objects - The array of objects to extract properties from.
 * @param {string[]} properties - The names of the properties to extract.
 * @return {Object[]} - An array of objects with only the specified properties.
 */
function extractProperties(objects, ...properties) {
    return objects.map(obj => {
        // Create a new object with only the specified properties
        let newObj = {};
        properties.forEach(prop => {
            if (obj.hasOwnProperty(prop)) {
                newObj[prop] = obj[prop];
            }
        });
        return newObj;
    });
}

const objects = [{ a: 1, b: 2, c: 4 }, { a: 5, b: 6, c: 7 }];
console.log(extractProperties(objects, "a", "c"));
