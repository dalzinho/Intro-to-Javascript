// Section 1

// What types are these?

/* 1.1 */ 1; //number
/* 1.2 */ "cat"; //string
/* 1.3 */ true; //boolean
/* 1.4 */ []; //(empty) array
/* 1.5 */ {}; //(empty) object
/* 1.6 */ 1.1; //number
/* 1.7 */ var myVariable; //undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; //true
/* 2.2 */ "cat"; //true
/* 2.3 */ true; //true
/* 2.4 */ NaN; //false
/* 2.5 */ []; //true
/* 2.6 */ {}; //true
/* 2.7 */ undefined; //false
/* 2.8 */ ""; //false
/* 2.9 */ 0; //false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number

var aNumber = 1;

// 3.2 Assign a variable that is a string

var aString = "Saluton!";

// 3.3 Assign a variable that is a boolean

var aBoolean = (1 === 1);

// 3.4 Assign a variable that is an object

var anObject = {};

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
10 * 10 === 100 ? console.log("hello") : console.log("bye");

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable

var firstAnimal = animals[0];

// 5.2. Assign the last element to a variable

var lastAnimal = animals[animals.length - 1]

// 5.3. Assign the length of an array to a variable

var animalArrayLength = animals.length;

// 5.4. Add an item to the end of the array

animals.push("Platypus");

// 5.5. Add an item to the start of the array

animals.unshift("Zebra");

// 5.6. Assign the index of hedgehog to a variable

var hedgehogIndex = animals.indexOf("hedgehog");
// console.log(hedgehogIndex);


// Section 6

// 6.1 Create an array of 5 vegetables

var someVegetables = ["cucumber", "aubergine", "chips", "cabbage", "turnip"]
// 6.2 Loop over the array and write to the console using a "while"

var counter = 0
while (counter < someVegetables.length){
  console.log(someVegetables[counter]);
  counter++;
} 
// 6.3 Loop again using a "for" with a counter

for(var i = 0; i < someVegetables.length; i++){
  console.log(someVegetables[i]);
}
// 6.4 Loop again using a "for of"
for(var veg of someVegetables){
  console.log(veg);
}

// Section 7

var accounts = [
{ name: 'jay',
amount: 125.50,
type: 'personal'
},
{ name: 'val',
amount: 55125.10,
type: 'business'
},
{ name: 'marc',
amount: 400.00,
type: 'personal'
},
{ name: 'keith',
amount: 220.25,
type: 'business'
},
{ name: 'rick',
amount: 1.00,
type: 'personal'
},
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts

var mapAmounts = function(accounts){
  return accounts.map(function(account){
    return account.amount;
  });
}

var totalCash = function(accounts){
  return mapAmounts(accounts).reduce(function(acc, val){
    return acc += val;
  })
}

console.log("totalCash:", totalCash(accounts));

// 7.2 Find the amount of money in the account with the largest balance

var highestBalance = function(accounts){
  return mapAmounts(accounts).reduce(function(a,b){
    return Math.max(a,b);
  });
}



console.log("highestBalance:",highestBalance(accounts));

// 7.3 Find the name of the account with the smallest balance

var lowestBalance = function(accounts){
  return mapAmounts(accounts).reduce(function(a,b){
    return Math.min(a,b);
  });
}

var poorestIndividual = function(accounts){

  return accounts.find(function(account){
    return account.amount === lowestBalance(accounts);
  }).name;
}

console.log("7.3; Poorest:", poorestIndividual(accounts));

// 7.4 Calculate the average bank account value

var averageBalance = function(accounts){
  return (totalCash(accounts) / accounts.length).toFixed(2);
}

console.log('7.4; average balance', averageBalance(accounts));

// 7.5 Find the value of marcs bank account

var findAccountByName = function(accounts, searchName){
  return accounts.find(function(account){
    return account.name === searchName;
  });
}

console.log("7.5; Marc's Balance:", findAccountByName(accounts, 'marc').amount);

// 7.6 Find the holder of the largest bank account
var richestIndividual = function(accounts){
  return accounts.find(function(account){
    return account.amount === highestBalance(accounts);
  }).name;
}

console.log('7.6; richest person:', richestIndividual(accounts));

// 7.7 Calculate the total cash in business accounts

var filterAccounts = function(accounts, type){
  return accounts.filter(function(account){
    return account.type === type;
  });
}


var totalBusinessCash = function(accounts){
  return totalCash(filterAccounts(accounts, 'business'));
}

console.log('7.7; total in business accounts:', totalBusinessCash(accounts));

// 7.8 Find the largest personal account owner

var largestPersonalAccountHolder = function(accounts){
  return richestIndividual(filterAccounts(accounts, 'personal'));
}

console.log('7.8; largest personal account:',largestPersonalAccountHolder(accounts));

// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Mikhail",
  height: 150,
  favouriteFood: "Borshcht",
  eat: function(){
    return 'I am eating ' + this.favouriteFood + ".";
  }
}

console.log(myPerson.eat());