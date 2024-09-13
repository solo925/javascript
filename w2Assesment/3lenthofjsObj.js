var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

const getObjectLength = (obj) => {
    return Object.keys(obj).length;
};

console.log(getObjectLength(student)); // Output: 3
