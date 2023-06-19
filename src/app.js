/* eslint-disable */

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Testing
console.log("Hello World");

// Normal For Loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// For Each
// - The straight replacement of a For loop
// - Does not have a return value
// - Is good to manipulate the original array -  e.g. creating new value

console.log(companies);

companies.forEach(item => {
  item.end = item.end + 1;
});

console.log(companies);

// Filter
// - Filters items out of the array
// - returns a new array
// - loops the entire original array and only returns the values that match a particular condition

const canDrink = ages.filter(function(age) {
  if (age >= 21) {
    return age;
  }
});

// or with Arrow functuin

const canDrinkA = ages.filter(age => {
  return age >= 21;
});

// or with an Arrow function + no parenethes + no return

const canDrinkSwe = ages.filter(age => age >= 18);

console.log(canDrink);
console.log(canDrinkA);
console.log(canDrinkSwe);

// with an object
const retailComps = companies.filter(company => {
  if (company.category === "Retail") {
    return company;
  }
});
console.log(retailComps);

// object with an Arrow function
const autoComps = companies.filter(company => company.category === "Auto");
console.log(autoComps);

// Map
// - The map() method is similar to the forEach() method, but it returns a new array
// - Lets us go through each item in an array
// - But we need to have a return statement, that returns the elements of the new array

const companyAges = companies.map(comp => {
  return comp.end - comp.start;
});

console.log(companyAges);

// sort
// - Iterates over an array
// - Returns the reference to the same array, now sorted (as strings)
// - (Reference to the original array means that > mutating the returned array will mutate the original array as well)

console.log("Companies before: ", companies);
