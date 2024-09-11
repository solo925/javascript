function countDistinctPalindromes(str) {
    const palindromes = new Set();
    
    // Helper function to expand around the center and collect palindromes
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            // Add palindrome substring to the set
            palindromes.add(str.substring(left, right + 1));
            left--;
            right++;
        }
    }
    
    // Iterate over each character and center between characters
    for (let i = 0; i < str.length; i++) {
        // Odd length palindromes (single character center)
        expandAroundCenter(i, i);
        // Even length palindromes (center between two characters)
        expandAroundCenter(i, i + 1);
    }
    
    return palindromes.size;
}

// Example usage
console.log(countDistinctPalindromes("abba")); // Output: 4 ("a", "b", "bb", "abba")
console.log(countDistinctPalindromes("abc"));  // Output: 3 ("a", "b", "c")
