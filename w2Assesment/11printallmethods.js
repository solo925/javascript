const allProperties = (obj) => {
    return Object.getOwnPropertyNames(obj).filter(prop => typeof obj[prop] === 'function');
};

console.log(allProperties(Array)); // Example Output: ["isArray", "from", "of", "isArray", "from", "of"]
