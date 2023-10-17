let obj = {
  '': "an empty string",
  '!': "an exclamation mark",
  1: "new string",
  newData: "Hello World"
};

console.log(obj['']);
console.log(obj[1]);
console.log(obj.newData);


// Self invoking function
(function newFunction() {
  console.log("function called");
})();

console.log(this.newData); // undefined

const { newData } = obj;
console.log(newData); // Destructure

// String

let stringData = "Sumayyah Sayyed";
console.log(stringData.length);

let greet = `Hello ${stringData}.`;
console.log(greet, greet.length);

let newString =
  "Sumayyah \
Sayyed \
is my \
name";

console.log(newString);

// Var and let

let num = 26;

{
  var data = 23;
  num = 30;
}

console.log(data);
console.log(num);

function checkFunctionScope() {
  var value = 23;
}
// console.log(value); var is function scoped, it cannot access the value outside the function


// NAN
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('NotANumber'));
console.log(sanitise(stringData));

// Switch Statement

let fruit = "Grapes";
switch (fruit) {
  case "Orange":
    console.log('Available');
    break;
  case "Mango":
    console.log(`My favorie fruit is ${fruit}`);
    break;
  default:
    console.log(`Sorry we donot have any ${fruit} available right now`);
}

// Try and Catch

function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false

// Loops

let newObj = {
  A: "Hello",
  a: "World",
  c: "Sumayyah",
  1: "Sayyed",
  2: "New",
  3: "data"
};

//  Printing the KEYS
for (let eachData in newObj) {
  console.log(eachData);
}
console.log(Object.keys(newObj)); // Another Method

// Printing the VALUES
for (const value of Object.values(newObj)) {
  console.log(value);
}

// Printing both VALUES and KEYS
for (const [key, val] of Object.entries(newObj)) {
  console.log(key, val);
}


let dataArray = ["Hello", "World", "Sumayyah"];
dataArray.lastName = "Sayyed";

for (let eachData in dataArray) {
  console.log(eachData);
}
console.log("-----------------");
for (let eachData of dataArray) {
  console.log(eachData);
}

// Reassining in If instead of checking
let a = 10;
if (a = 20) {
  console.log("Hello i am 20");
}
else {
  console.log("Not present");
}

// hoisting

console.log(newVal);
// console.log(newValLet); Cannot access newVallet before initialization

var newVal = 100;
let newValLet = 10;

// Precedence check

const o = 1 + 2 * 3;
const n = 1 * 2 + 3;

console.log(o, n);

// This operator

function getThis() {
  return this;
}

let obj1 = {
  name: "Object 1",
  type: "Object",
  lenght: 3
};

let obj2 = {
  name: "Object 2",
  lenght: 2
};

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());
console.log(obj2.getThis());

console.log("--------------------");

// const a5 = "Cat" || "Frog";
const a5 = "Cat" && "Dog";

console.log(a5);

// const a1 = 11 | 26;
const a1 =   11 | 10;
// Not understanding the behavior of bitwise operator

console.log(a1);

const a7 = "Cat" || true;
console.log(a7) // t && f returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees); // returns true
console.log(3 in trees); // returns true
console.log(6 in trees); // returns false


console.log(typeof (NaN));