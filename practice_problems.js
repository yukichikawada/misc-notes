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

// console.log(isIsogram('isogram'));
// console.log(isIsogram('aba'));
// console.log(isIsogram("moOse"));

function bSearch(tgt, array) {
  const midPoint = Math.floor(array.length / 2);
  
  if (array[midPoint] == tgt) {
    return midPoint;
  } else if (array[midPoint] > tgt) {
    return bSearch(tgt, array.slice(0, midPoint))
  } else if (array[midPoint] < tgt) {
    // midPoint + 1 = returned idx offset
    // arr.slice(midPoint+1) so that same idx isn't checked twice
    return (midPoint + 1) + bSearch(tgt, array.slice(midPoint+1));
  }
  return "target not found"
}

// console.log(bSearch(0, [1, 2, 3]))
// console.log(bSearch(2, [1, 2, 3]))
// console.log(bSearch(2, [1, 2, 3, 4, 5]))
// console.log(bSearch(5, [1, 2, 3, 4, 5]))
// console.log(bSearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9]))

function bubbleSort(arr) {
  let search = true;

  while (search) {
    search = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        search = true;
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

// console.log(bubbleSort([1, 2, 3, 4, 5]))
// console.log(bubbleSort([6, 1, 2, 3, 4, 5]))
// console.log(bubbleSort([1, 3, 2, 3, 1, 2, 4, 5]))

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let midPoint = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));

  return merge(left, right);
}

function merge(left, right) {
  const arr = [];
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  
  return arr.concat(left).concat(right);
}

// console.log(mergeSort([1, 2, 3, 4, 5]))
// console.log(mergeSort([5, 4, 3, 2, 1, 2, 3, 4, 5]))


function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr.shift();

  let left = arr.filter(el => (el <= pivot));
  let right = arr.filter(el => (el > pivot));

  left = quickSort(left);
  right = quickSort(right);

  return left.concat([pivot]).concat(right);
}

// console.log(quickSort([1, 2, 3, 4, 5]))
// console.log(quickSort([5, 4, 3, 2, 1, 2, 3, 4, 5]))


// https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/
function seriesSum(n){
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / ((i * 3) + 1);
  }

  return sum.toFixed(2);
}


// console.log(SeriesSum(1));
// console.log(SeriesSum(2));
// console.log(SeriesSum(3));
// console.log(SeriesSum(4));

function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el));
}

// console.log(arrayDiff([], [4, 5]))     // => [] 
// console.log(arrayDiff([3, 4], [4, 5])) // => [3]
// console.log(arrayDiff([3, 4], [4, 3])) // => []



const COMPLEMENTS = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};

// return the complementary dna strand given one side

function DNAStrand(dna){
  return dna.split('').map(chr => {
    return COMPLEMENTS[chr];
  }).join('');
}

// console.log(DNAStrand('ATGC')) // => 'TACG'


// given a string of numbers
// return the normalized idx of the element
// that is not like the others
function iqTest(numbers){
  // convert input to array of integers
  numbers = numbers.split(' ').map(el => parseInt(el));

  // extract even and odd elements
  const odds = numbers.filter(el => (el % 2) === 1);
  const even = numbers.filter(el => (el % 2) === 0);

  // return idx of even element if more odds than evens
  if (odds.length > even.length) return numbers.indexOf(even[0]) + 1;
  // return idx of odd element 
  return numbers.indexOf(odds[0]) + 1;
}

//                     1,2,3,4
// console.log(iqTest('2 3 4 6')); // => idx 2 
// console.log(iqTest('1 3 5 6')); // => idx 4 

function moveZeros(arr) {
  const res = arr.filter(el => el !== 0);

  while (res.length <= arr.length) {
    res.push(0);
  }
  
  return res;
}

function moveZerosBETTER(arr) {
  return arr
    .filter(el => el !== 0)
    .concat(arr.filter(el => el === 0));
}

// console.log(moveZeros([1, 2, 0, 0, 3, 4, 0, 5])); 
// => [1, 2, 3, 4, 5, 0, 0, 0]

// console.log(moveZerosBETTER([1, 0, 2, 0, 3, 0]));

// return string with even idx chr as uppercase
// reset idx with every new word
function toWeirdCase(string){
  return string.split(' ').map(word => {
    return word.split('').map((chr, idx) => {
      if (idx % 2 === 0) {
        return chr.toUpperCase();
      } else {
        return chr;
      }
    }).join('');
  }).join(' ');
}

// console.log(toWeirdCase('helloworld'))  // => 'HeLlOwOrLd'
// console.log(toWeirdCase('hello world')) // => 'HeLlO WoRlD'

// given an array of 1 thru a
// rotate array n times ~ assumed n is > 1
function rotateLeft(a, n) {
  // Array.from es6
  const arr = Array.from({length: a}, (v, k) => k + 1);
  return arr.slice(n, a).concat(arr.slice(0,n))
}

// console.log(rotateLeft(5, 4)); // => [5, 1, 2, 3 , 4]
// console.log(rotateLeft(5, 1)); // => [2, 3 , 4, 5, 1]

function expandedForm(num) {
  const res = num.toString()
                .split('')
                .reverse()
                .map((el, idx) => (el * (10**idx)));

  return res.reverse().filter(el => el !== 0).join(' + ');
}

// console.log(expandedForm(12)); // => "10 + 2"
// console.log(expandedForm(42)); // => "40 + 2"
// console.log(expandedForm(70304)); // => "70000 + 300 + 4"



function isValidIP(str) {
  const octet = str.split('.');
  if (octet.length !== 4) return false;
  
  const res = octet.filter (el => el < 256);
  
  return (res.length === 4) ? true : false
}

// console.log(isValidIP('1.2.3.4'))
// console.log(isValidIP('123.45.67.89'))
// console.log(isValidIP('432.45.67.89'))
// console.log(isValidIP('45.67.89'))

/*
 Noisy Thief

 There are n houses built in a line, each of which contains some value in it.
 You are a thief who wants to steal the maximal value of these houses, but 
 you can’t steal from two adjacent houses because you are a loud thief, and
 stealing from one house notifies the two adjacent houses.

 Given an array of house values, find the maximum amount you can steal given
 those constraints

 maxStolenValue([1, 2, 3, 1]) -> 4
*/

// track sum
// iterate over the array, with nested loops
// compare two items arr[idx+2] & arr[idx+3]
// out of 4 scenarios, there are three when left (idx + 2) should be selected
// 1.) left is >= right
// 2.) 4th from idx is greater than sum of 2nd + 3rd from idx
// 3.) there isn't an item at right idx
// if current sum is greater than record, reset record to current


function maxStolenValue(arr) {
  let record = arr[0];

  for (let i = 0; i < 2; i++) {
    let current = arr[i];

    for (let j = i+2; j < arr.length; j++) {
      if (arr[j] >= arr[j+1]) {
        current += arr[j];
        j++;
      } else if (arr[j+2] > arr[j] + arr[j+1]) {
        current += arr[j];
        j++;
      } else if (typeof arr[j+1] === 'undefined') {
        current += arr[j];
      } else {
        current += arr[j+1];
        j++;
      }
    }

    if (current > record) record = current;
  }

  return record
}


// // 1.) pick left item simple
// console.log(maxStolenValue([1, 2, 3, 1]));       // => [1, 3] = 4
// // 4.) pick right item
// console.log(maxStolenValue([2, 1, 1, 7, 8, 9])); // => [2, 7, 9] = 18
// // 2.) pick left item advanced case bc sum L+R < 3rd idx
// // 3.) pick left item bc right idx is out of range 
// console.log(maxStolenValue([1, 1, 7, 8, 19]));   // => [1, 7, 19] = 27

// // edge cases
// console.log(maxStolenValue([1]))                 // => 1
// console.log(maxStolenValue([1, 2]))              // => 2


// given a 3 x 3 tic-tac-toe board, return 1
// if x has won, 2 if o has won, or -1 if still in play

function gameOver(board) {
  // write helper method that takes the board and a player
  // and returns expected value if true
  // else return -1

  // helper method finds player piece
  // checks right, right down, down for matching
  // if matched, checks in same direction for third
  // can stop one at arr[2][0] if no piece
  const x = winningPiece(board, 1);
  const y = winningPiece(board, 2);

  if (x == true) {
    return 1;
  } else if (y == true) {
    return 2;
  } else {
    return -1;
  }
}

function winningPiece(board, player) {
  let winner = false;
  // write helper method that right, right diag, down
  // also need to check up and to the left
  return winner;
}

console.log(
  gameOver([
           [0, 0, 1],
           [0, 1, 2],
           [2, 1, 0]
           ]) === -1
);


// given a number return true or false
// if number is sum of own digits raised to the power of number of digits
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

function narcissictic(number) {
  const length = number.toString().length;
  const products = number.toString().split('').map(num => num ** length);
  const sum = products.reduce((acc, num) => acc += num);
  return (sum == number);
}

// console.log(narcissictic(7));
// console.log(narcissictic(153));
// console.log(narcissictic(154));
// console.log(narcissictic(1634));




// write a function that returns a hash that contains the letter count
// of each character of the given string

function charHash(string) {
  let hash = {};
  string.split('').forEach(chr => {
    if (hash[chr]) {
      hash[chr] += 1;
    } else {
      hash[chr] = 1;
    }
  });

  return hash;
}

// console.log(charHash(''));
// console.log(charHash('ab'));
// console.log(charHash('aba'));


// write a function that, given a string, returns the string camelCase
function toCamelCase(string) {
  return string.split(/[-_]/).map((word, idx) => {
    if (idx == 0) {
      return word;
    } else {
      return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
    }
  }).join('');
}

// console.log(toCamelCase(''));
// console.log(toCamelCase('abcd'));
// console.log(toCamelCase('simple-case-1'));
// console.log(toCamelCase('simple_case_2'));
// console.log(toCamelCase('Test_case_3'));
// console.log(toCamelCase('Test-case-4'));


// write a function that, given a string, returns a boolean
// based on whether string contains all letters of alphabet, not case sensitive
function isPangram(string) {
  let hash = {};
  string.toLowerCase().split('').forEach(chr => {
    if (hash[chr]) {
      hash[chr] += 1;
    } else if (chr.match(/[a-z]/)) {
      hash[chr] = 1;
    }
  });
  
  return (Object.keys(hash).length == 26);
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog.') == true)
// console.log(isPangram('The quick brown fox.') == false)


// given str1 & str2, return the last digit of str1 to the power of str2
var lastDigit = function(str1, str2) {
  const num = str1**str2;
  return parseInt(num.toString().slice(-1));
}

// console.log(lastDigit(4,1));
// console.log(lastDigit(4,2));
// console.log(lastDigit(9,7));








