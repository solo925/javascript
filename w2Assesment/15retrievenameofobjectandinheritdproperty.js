const getAllPropertyNames = (obj) => {
    let properties = [];
    for (let key in obj) {
        properties.push(key);
    }
    return properties;
};

console.log(getAllPropertyNames(Object.prototype)); // Example Output: ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
