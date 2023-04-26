function reverseString(word) {
  word = word.toLowerCase();
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

module.exports = isPalindrome;
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
