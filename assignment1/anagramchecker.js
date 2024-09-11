function checkAnagram(word1, word2) {
    let length1 = word1.length;
    let length2 = word2.length;
    if (length1 !== length2) {
      console.log(word1 + ' and ' + word2 + ' lengths did not match!');
      return
    }
    let wordA = word1.split('').sort().join('');
    let wordB = word2.split('').sort().join('');
  
    if (wordA === wordB) {
      console.log(word1 + ' and ' + word2 + ' are anagram to each other');
    } else {
      console.log(word1 + ' and ' + word2 + ' are not anagram to each other');
    }
  }
  
  let word1 = 'silent';
  let word2 = 'listen';
  
  checkAnagram(word1, word2)
  
  word1 = 'shouts'
  
  checkAnagram(word1, word2)
  