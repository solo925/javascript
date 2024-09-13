const hasProperty = (obj, prop) => {
    return obj.hasOwnProperty(prop);
};

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(hasProperty(student, 'name')); // Output: true
console.log(hasProperty(student, 'age')); // Output: false
