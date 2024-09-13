var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

const listProperties = (obj) => {
    return Object.keys(obj).join(',');
};

console.log(listProperties(student)); // Output: name,sclass,rollno
