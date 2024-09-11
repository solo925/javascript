function isCaseInsensitive(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters (like spaces and punctuation)
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
}


console.log(isCaseInsensitive("A man, a plan, a canal, Panama")); 
console.log(isCaseInsensitive("race a car")); 
console.log(isCaseInsensitive("was it a car or a cat i saw")); 

