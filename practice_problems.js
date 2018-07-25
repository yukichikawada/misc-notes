function disemvowel(string) {
  // replace returns after the first match so,
  // 'g' is a global search, 'i' is case insensitive
  return string.replace(/[aeiou]/gi, '');
}

// console.log("care'in for you => cr'n fr y: " + 
//             ("cr'n fr y" === disemvowel("care'in for you"))
// );


// return the number value of each letter in the string
// separated by a space, ignore all non-letters 
function alphabetPosition(text) {
  const letters = extractLetters(text);
  return letters.split('').map(letter => {
    // 1. convert letter to lower case
    // 2. convert letter to char code with offset 0
    // 3. subtract 96 from result so that 
    //      letter 'A' starts at idx 1
    return letter.toLowerCase().charCodeAt() - 96;
  }).join(' ');
}

function extractLetters(string) {
  // borrowing regex pattern from disembowel
  return string.replace(/[^a-z]/gi, '');
}

function alphabetPositionBETTER(text) {
  return text
    // convert to lower case so that offset is same for all
    .toLowerCase()
    // String.match returns an array, taking a regex arg 
    .match(/[a-z]/gi)
    // convert char code - offset for alphabet idx
    .map(letter => letter.charCodeAt() - 96)
    .join(' ');
}

// console.log(alphabetPosition("You've Got Mail!"));
// console.log(alphabetPositionBETTER("You've Got Mail!"));

function duplicateLetterCount(text) {
  const uniq = [];
  let count = 0;

  text
    .toLowerCase()
    .match(/[a-z]/gi)
    .map(letter => {
      if (!uniq.includes(letter)) {
        uniq.push(letter);
      } else {
        count += 1;
      };
    });
  
  return count;
}

// console.log(duplicateLetterCount('the fast car goes'))

function subIsogram(chr, str) {
  return str.split('').includes(chr);
}

// console.log(subIsogram('a', 'bcdef'))
// console.log(subIsogram('a', 'bacdef'))

function isIsogram(str){
  let isogram = true;
  const length  = str.length;
  str = str.toLowerCase();
  
  str.split('').forEach((el, idx) => {
    res = isogramCheck(el, str.slice(idx + 1, length));
    // since there's no way to break out of forEach
    // only change isogram if true
    if (res == false) isogram = res;
  });
  
  return isogram;
}

function isogramCheck(chr, str) {
  return !str.split('').includes(chr);
}

console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram("moOse"));