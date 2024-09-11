function removeDuplicate(str) {
    let charArray = str.split('');
    let uniqueChars = [...new Set(charArray)];
    return uniqueChars.join('');
}


console.log(removeDuplicate('programming'));
console.log(removeDuplicate('hello world'));
console.log(removeDuplicate('aaaaa'));
console.log(removeDuplicate('abcd'));
console.log(removeDuplicate('aabbcc'));



