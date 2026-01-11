function findLongestWord(sentence) {
  let words = sentence.split(' ');
 
  let longestWord = words;
  for(const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const sentence = "I am learning Programming to become a programmer";
 console.log(findLongestWord(sentence)) 