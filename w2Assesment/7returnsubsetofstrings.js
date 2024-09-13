const getSubsets = (str) => {
    const subsets = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            subsets.push(str.slice(i, j + 1));
        }
    }
    return subsets;
};

console.log(getSubsets("dog")); // Output: ["d", "do", "dog", "o", "og", "g"]
