const getAllValues = (obj) => {
    return Object.values(obj);
};

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(getAllValues(student)); // Output: ["David Rayy", "VI", 12]
