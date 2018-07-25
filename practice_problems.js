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

console.log(quickSort([1, 2, 3, 4, 5]))
console.log(quickSort([5, 4, 3, 2, 1, 2, 3, 4, 5]))











































