let set1 = new Set([1, 2, 3, 4, 5, "Hello"]);
console.log(set1);

/* ----- Read-only Sets ----- */
// check if a value is present in the set
console.log(set1.has(1)); // result = boolean value
console.log(set1.size);
console.log("---------------");

let iterator1 = set1.values();
console.log(iterator1);
console.log('NEXT value From itreator1', iterator1.next().value);
console.log("---------------");

let iterator2 = set1.keys();
console.log(iterator2);
console.log('NEXT value From itreator2', iterator2.next().value);
console.log("---------------");

set1.forEach(val => console.log('value of SET: ', val));
console.log("---------------");

let iterator3 = set1.entries();
for (let eachItem of iterator3) {
    console.log(eachItem);
}

console.log("---------------");
let setArr = Array.from(set1);
console.log(setArr);

/* ----- Writable Sets ----- */

set1.add("nEw")// add items. It will not add any duplicate values
set1.add("nEw");

let o = { a: 1, b: 2 };
set1.add(o);

set1.delete("nEw"); // Delete items

// Delete all items
// set1.clear();
console.log(set1);

/* -----  ----- */
console.log("---------------");
console.log([...set1]); // it converts the object into an array

// Remove duplicates from an array using Set

console.log("---------------");
let numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log("Original Array: ", numbers)
console.log([...new Set(numbers)]);


// String in SET

let user = "Sumayyah Sayyed";
let newSet = new Set(user);
console.log(newSet);
// It will not save any duplicates


// The concept of an Object is very similar to that of a Map: it stores data using a key-value pair. However, minor variations make Map work better under specific conditions, mainly because Object do not preserve the insertion order of elements when storing the data.

let map1 = new Map();

map1.set('A', "Hello");
map1.set('a', "World");
map1.set('c', "Sumayyah");
map1.set('1', "Sayyed");
map1.set('2', "New Data");

console.log(map1);
console.log(map1.size);
console.log(map1.delete('a')); // Returns a boolean value

console.log(map1.size);

// for(let mapKeys in map1){
//     console.log(mapKeys);
// }

map1.forEach((value, key) =>{
    console.log(value , key);
})

let map = new Map([
    ['A', "OK, the order is preserved here"],
    ['a', "Working"],
    [1, "Hello"],
    [2, "New World"]
])

console.log(map);

console.log([...map]);

const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)



const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
  const merged = new Map([...first, ...second]);
  console.log(merged);
  