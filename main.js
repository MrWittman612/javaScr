const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const games = [
//   { type: football, places: [{ name: 'Powderhorn', address: '3500 11th', time: '2019 18:10:35 GMT-0500' }], team: 'pewee' }
//   { type: football, places: [{ name: 'Kenny', address: '5700 fremont', time: '2019 11:10:35 GMT-0500' }], team: 'Varsity' }
//   { type: football, places: [{ name: 'Armitage', address: '5000 Girard', time: '2019 09:10:35 GMT-0500' }], team: 'Jr Varsity' }
//   { type: football, places: [{ name: 'Serward', address: '2700 26th', time: '2019 18:10:35 GMT-0500' }], team: 'Varsity' }
//   { type: football, places: [{ name: 'Powderhorn', address: '3500', time: '2019 18:10:35 GMT-0500' }], team: 'pewee' }
//   { type: football, places: [{ name: 'Powderhorn', address: '3500', time: '2019 18:10:35 GMT-0500' }], team: 'Jr Varsity' }
//   { type: football, places: [{ name: 'Powderhorn', address: '3500', time: '2019 18:10:35 GMT-0500' }], team: 'Varsity' }
//   { type: football, places: [{ name: 'Powderhorn', address: '3500', time: '2019 18:10:35 GMT-0500' }], team: 'pewee' }
// ]

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//   console.log(company);
// });

// companies.forEach(company => console.log(company));
// ages.forEach(age => console.log(age));
// filter

// let canDrink = [];

// for (let i = 0; i < ages.length; ++i) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// const retailCompanies = companies.filter(function(company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(
//   company => company.category === "Retail"
// );

// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(function(company) {
//   if (company.start >= 1989) {
//     return true;
//   }
// });

// const eightiesCompanies = companies.filter(function(company) {
//   if (company.start >= 1980 && company.start < 1990) {
//     return true;
//   }
// });

// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.start < 1990
// );

// console.log(eightiesCompanies);

// companies that lasted more than ten years

// const lastedTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );

// console.log(lastedTenYears);

// map
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]}`;
// });
// ES6
// const companyNames = companies.map(
//   company => `${company.name} [${company.start} - ${company.end}]}`
// );

// console.log(companyNames);

// { name: "Company One", category: "Finance", start: 1981, end: 2003 },
// const companiesCategories = companies.map(
//   company => `${company.category} [${company.start} - ${company.end}]`
// );

// console.log(companiesCategories);

// const agesSqrt = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesSqrt);
// console.log(agesTimesTwo);

// const agesTimesTwoAndSquared = ages
//   .map(age => age * 2)
//   .map(age => Math.sqrt(age));

// console.log(agesTimesTwoAndSquared);
// sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => a - b);
// const sortAges = ages.sort((a, b) => b - a);

// console.log(sortAges);

// reduce

// let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );

// console.log(totalYears);

// const combine = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);

// console.log(combine);

// ages.push("end");
// ages.unshift("start");

// 6 months ago
// The tricky question about the first task could be:
// "What's the difference between first way (the push() and unshift() solution) and the second way (the spread operators' solution)?", because there is a significant difference.First way mutates the original array, but does not change the reference to it.The second way creates a new array and re - assign an original array, so the new reference is created.
// In this particular example it doesn't matter since you're using`var`, but if you'd use `const` instead, then the second way would throw an error and the first would be the right one.

// ages = [...ages, "end"];
// ages = ["start", ...ages, "end"];
// console.log(ages);

// function secretVariable() {
//   var private = "super secret code";
//   return function() {
//     return private;
//   };
// }

// var getPrivateVariable = secretVariable();

// console.log(getPrivateVariable());

// let i = Number.MIN_VALUE;

// console.log(i * i);
// console.log(i + 1);
// console.log(i - 1);
// console.log(i / i);

// let i = ?;

// console.log( i * i );
// console.log( i / i );

// let x = [1, 2, 3] + [4, 5, 6];
// let x = [...[1, 2, 3], ...[3, 4, 5]];
// let x = String([...[1, 2, 3], ...[4, 5, 6]]);

// console.log(x);

// max safe int
// console.log(Number.Max_SAFE_INTEGER);
// console.log(555555555555555555);

// iife
// (function() {
//   let a = (b = 100);
// })();

// console.log(b);
// console.log(a);

// (function() {
//   let a = 100;
//   let b = a;
//   console.log(b);
//   console.log(a);
// })();

// console.log(NaN === NaN);

// this does not work ???????
// var uglyArray = [[1, (2)[(3, [5])]], 4];

// function flatten(items) {
//   const flat = [];

//   items.forEach(item => {
//     if (Array.isArray(item)) {
//       flat.push(...flatten(item));
//     } else {
//       flat.push(item);
//     }
//   });
//   return flat;
// }

// flatten(uglyArray);

// console.log(flatten(uglyArray));

// let x = function() {
//   console.log("I am called from inside a function");
// };

// let y = function(callback) {
//   console.log("do something");
//   callback();
// };

// y(x);

// let calc = function(num1, num2, calcType) {
//   if (calcType === "add") {
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// };

// console.log(calc(2, 3, "add"));

let doWhatEver = function(a, b) {
  console.log(`What are you trying to do with ${a} and ${b}`);
};

let add = function(a, b) {
  return a + b;
};

let multiply = function(a, b) {
  return a * b;
};

let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  } else {
    return "you did something wrong";
  }
};

console.log(calc(2, 3, multiply));

var myArr = [
  {
    num: 5,
    str: "apple"
  },
  {
    num: 7,
    str: "cabbage"
  },
  {
    num: 1,
    str: "ban"
  }
];

myArr.sort((val1, val2) => {
  if (val1.str > val2.str) {
    return -1;
  } else {
    return 1;
  }
});

console.log(myArr);

// // event loop

// // L1
// console.log("Synchronous 1");

// // L2
// setTimeout(_ => console.log("Timeout 2"), 0);

// // L3
// Promise.resolve().then(_ => console.log("Promise"));

// // l4
// console.log("Synchronous 4");

function dateFormat(date) {
  const month = date.getMonth();
  const day = date.getDate();
  const monthString = month >= 10 ? month : `0${month}`;
  const dayString = day >= 10 ? day : `0${day}`;
  return `${date.getFullYear()}-${monthString}-${dayString}`;
}

console.log(dateFormat(new Date()));
console.log(new Date());

// The virtual field setup would look like this:

// projectSchema
//   .virtual( 'created.formatted' )
//   .get( function () {
//     return dateFormat( this.created )
//   } );

var array1 = [5, 12, 8, 130, 44];

var found = array1.findIndex(function(element) {
  return element > 40 && element < 100;
});

console.log(found);

// Challenge 1: reverse string
// return a string in reverse
//ex. reverseString('hello') === ("olleh")
// const str = "hello";
function reverseString(str) {
  // return "Let's Start";
  // const strArr = str.split("");
  // strArr.reverse();

  // console.log(strArr);
  // return strArr.join("");

  // return str
  //   .split("")
  //   .reverse()
  //   .join("");

  /////////////////////////
  //decrementing for loop

  // let revString = "";

  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // str.split("").forEach(function(char) {
  //   revString = char + revString;
  // });
  // return revString;

  return str.split("").reduce(function(revString, char) {
    return char + revString;
  }, "");
}

console.log(reverseString("hello"));

// Challenge 2: Validate a palindrome
// return true if palindrome and false if not
// ex. isPalindrome('racecar')

function isPalindrome(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");
  return revString === str;
}

// Challenge 3: Reverse Integer
// Return an Integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(revString) * Math.sign(int);
}

// Challenge 4: Capitalize Letters
// Return a string with the first letter of every word capitalized
// ex. capitalizedLetters('i love javascript') === "I Love Javascript"

function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(" ");
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] =
  //     strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(" ");

  ///////////

  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");

  ////////////////////
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// Challenge 5: max characters
// Return the character that is the most common in a string
// ex. maxCharacter('javascript') === 'a'

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
    // console.log(charMap);
  });
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// Challenge 6: FizzBuzz
// Write a program that prints all the numbers from 1 to 100, For multiples of 3, instead of he number, print 'fizz', for multiples of 5 print 'Buzz', For multiples of both 3 and 5, print 'FizBuzz'.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("BuzzFizz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const output4 = fizzBuzz();
const output3 = maxCharacter("javascript");
const output2 = capitalizeLetters("i love javascript");
const output = reverseInt(521);
console.log(output, output2, output3);
console.log(output4);

// Session 2: JavaScript Cardio

// Challenge 1: Longest Word
//Return the longest word of a string
// if more than on longest word, put into an array
// ex. longestWord('Hello, my name is Chad') === 'hello'
// ex. longestWord('Hello there, my name is Chad') === ['hello','there']
const sen = {};
function longestWord(sen) {
  // return "Lets Start!";
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  console.log("sorted :", sorted);
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );
  // console.log("longestWordArr", longestWordArr);
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// Challenge 2: Array Chunking
// Split an array into chunked array of a specific length
// ex. chunkArray([1,2,3,4,5,6,7],3) === [[1,2,3],[4,5,6],[7]]
// ex. chunkArray([1,2,3,4,5,6,7],2) === [[1,2],[3,4],[5,6],[7]]

function chunkArray(arr, len) {
  // const chunkedArr = [];
  // let i = 0;

  // while (i < arr.length) {
  //   chunkedArr.push(arr.slice(i, i + len));
  //   i += len;
  // }
  // return chunkedArr;

  const chunkedArr = [];
  arr.forEach(function(val) {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

// Challenge 3: Flatten Array
// Take an array of arrays and flatten to a single array
// ex. [[1,2],[3,4],[5,6],[7]] = [1,2,3,4,5,6,7]

function flattenArray(arrays) {
  // return arrays;
  // return arrays.reduce((a, b) => a.concat(b));
  // return [].concat.apply( [], arrays );
  return [].concat(...arrays);
}

// Challenge 4: Anagram
// Return true if anagram and false if not
//ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

// Challenge 5: Letter Changes
// Change every letter of a string to the one that fallows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChange(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if (char === "z" || char === "2") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  return newStr;
}

const getFlattenArray = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
const getLongestWord = longestWord("Hello there, my name is Chad");
const getChunkArray = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// const seeIsAnagram = isAnagram("elbow", "below");
const seeIsAnagram = isAnagram("Dormitory", "dirty room");
const doLetterChange = letterChange("Hello there");

console.log("getLongestWord :", getLongestWord);
console.log("getChunkArray :", getChunkArray);
console.log("getFlattenArray :", getFlattenArray);
console.log("seeIsAnagram :", seeIsAnagram);
console.log("doLetterChange :", doLetterChange);

// Session 3

// Challenge 1: Add all Numbers
// Return a sum of all parameters entered regardless of the amount of numbers of the Array
// ex. addAll(2,3,4,5,6,7) === 20

// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

function addAll(...numbers) {
  // let total = 0;
  // numbers.forEach(num => (total += num));
  // return total;
  return numbers.reduce((acc, cur) => acc + cur);
}

console.log("addAll :", addAll(2, 5, 6, 7));

// Challenge 2: Sum of all primes
// PAss in a number to loop up to and add all of the prime numbers.
// sx. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;
  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log("sumAllPrimes", sumAllPrimes(10));

//Challenge 3: Seek & Destroy
// Remove from the Array whatever is in the following arguments. Return the leftover numbers is the array
// ex. seekAndDestroy([2,3,4,6,6, 'hello'], 2,6) == [3,4, 'hello']

// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArr(arr) {
//     return args.indexOf(arr) === -1;
//   }

//   return arr.filter(filterArr);
// }

function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log("seekAndDestroy", seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

// Challenge 4: Sort by Height
// Some people are standing in a row in a park. There are threes between them which cannot be moved. Your task is to rearrange the people
// ex.
// a= [-1,150,190,170,-1,-1,160,180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];
  a.forEach((val, i) => {
    if (val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });
  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log("sortByHeight", sortByHeight(a));
// Challenge 5: Missing Letter
// find the missing letter in the passed letter range and return it. If all letters are present, return undefined
//ex.
// missingLetters('abce') === d
// missingLetters('abcdefghjklmno') === i
// missingLetters('abcdefghijklmnopqrstuvwxyz') === undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;
  str.split("").map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

console.log("Missing Letter :", missingLetters("abce"));

// Challenge 6: Even & Odd Sums
// Take an array and return an array of the sum of the even and odd numbers
// ex.
// evenOddSums([50,60,60,45,71]) === [170,116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
}

console.log("Even 7 Odd Sums :", evenOddSums([50, 60, 60, 45, 71]));
