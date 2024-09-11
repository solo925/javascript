function longestPalindrome(str) {
    const length = str.length;
    const dp = Array(length)
      .fill(false)
      .map(() => Array(length).fill(false));
    let maxLength = 1;
    let start = 0;
  
    // Single characters are palindromes
    for (let i = 0; i < length; i++) {
      dp[i][i] = true;
    }
  
    // Check for palindromic substrings of length 2
    for (let i = 0; i < length - 1; i++) {
      if (str[i] === str[i + 1]) {
        dp[i][i + 1] = true;
        maxLength = 2;
        start = i;
      }
    }
  
    // Check for palindromic substrings of length greater than 2
    for (let len = 3; len <= length; len++) {
      for (let i = 0; i < length - len + 1; i++) {
        const j = i + len - 1;
        if (str[i] === str[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
          if (len > maxLength) {
            maxLength = len;
            start = i;
          }
        }
      }
    }
    return str.slice(start, start + maxLength);
  };
    
  console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("hello"))
  