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
