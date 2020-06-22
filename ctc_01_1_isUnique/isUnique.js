//  Implement an algorithm to determine is a string has all unique characters.  What if you cannot use additional data structures?  _Cracking the Code, 90._

const uniqueLetterString = 'zyxwvutsrqpon';
const dupedLetterString = 'This will not go well';

const isUniqueWithHash = (string) => {
  let outHash = {};
  for (let i = 0; i < string.length; i++) {
    if (outHash[string[i]]) {
      return false;
    } else {
      outHash[string[i]] = 1;
    }
  }
  return true;
};

console.log('unique:', isUniqueWithHash(uniqueLetterString));
console.log('duped:', isUniqueWithHash(dupedLetterString));

const isUniqueNoDataStructure = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] == string[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log('unique:', isUniqueNoDataStructure(uniqueLetterString));
console.log('duped:', isUniqueNoDataStructure(dupedLetterString));
