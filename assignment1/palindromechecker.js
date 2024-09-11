function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters (like spaces and punctuation)
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("race a car")); 
console.log(isPalindrome("was it a car or a cat i saw")); 

