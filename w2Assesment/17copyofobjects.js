const invertObject = (obj) => {
    const inverted = {};
    for (const [key, value] of Object.entries(obj)) {
        inverted[value] = key;
    }
    return inverted;
};

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(invertObject(student)); // Output: { 'David Rayy': 'name', VI: 'sclass', '12': 'rollno' }
