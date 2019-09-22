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
