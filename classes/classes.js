function PersonFunction() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
  
    setInterval(function growUp() {
      // In nonstrict mode, the growUp() function defines `this`
      // as the global object, which is different from the `this`
      // defined by the PersonFunction() constructor.
      this.age++;
    }, 1000);
  }
  
  const p = new PersonFunction();
  console.log(p);
  
  function Person() {
    this.name = 'Jack',
      this.age = 25,
      this.sayName = function () {
  
        // this is accessible
        console.log(this.age);
  
        function innerFunc() {
  
          // this refers to the global object
          console.log(this.age);
          console.log(this);
        }
  
        innerFunc();
  
      }
  }
  
  let x = new Person();
  x.sayName();
  
  
  let PersonClass = {
    name: "Sumayyah Sayyed",
    gender: "Female",
    age: "22",
    greet: function () {
      console.log(`Hello ${PersonClass.name}`);
      console.log(`Hello ${this.name}`);
      console.log("THIS -> ", this);
      return this; // if this is removed, the line 273 (console.log(personData);) prints undefined because it is referring to the window object
    }
  }
  
  PersonClass.greet();
  
  let personData = PersonClass.greet();
  console.log(personData);
  
  let newVar = PersonClass.greet;
  let bindData = newVar.bind(PersonClass);
  console.log(bindData());

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;

    // this.newFunction = function(){
    //     console.log(r, g ,b)
    //     console.log(this.r);
    // }
    // The above function also works but it will be created for every new instance. This will cause the duplication of the function that is returning the same thing for each instance
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}
Color.prototype.color_R = this.r;

let newColor = new Color(255, 1, 0);
// New creates an new instance of a class

console.log(newColor.rgb());

//These prints undefined values because of the this operator
console.log(Object.getPrototypeOf(newColor).color_R);
console.log(Object.getPrototypeOf(newColor).rgb());

function Car(color) {
    if (!new.target) {
        // Called as function.
        return `${color} car`;
    }
    // Called with new.
    this.color = color;
}

const a = Car("red"); // a is "red car"
const b = new Car("red"); // b is `Car { color: "red" }`

//   Date()
let value = console.log(new Date().toString()) === console.log(Date());

// ---------
console.log("--------------------");
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person_1 = new Person("Sumayyah", 22, "female");

function Car(brand, model, owner) {
    this.brand = brand;
    this.model = model;
    this.owner = owner;
}

let car_1 = new Car("Tesla", "X", person_1);

// new with classes

class Greet {
    constructor(name) {
        this.name = name
    }
    greetPeople() {
        alert(`Hello there ${this.name}`)
    }
}

let greet_1 = new Greet("Sumayyah");

// Constructor

class Colors {
    constructor(r, g, b) {
        this.values = [r, g, b];
    }
}

let red = new Colors(255, 0, 0);



// ----------------------
console.log("--------------------");
class MyClass {
    constructor() {
        this.myField = "foo";
        // Constructor returns the value by itself.

        //   return {};
    }
}

console.log(new MyClass().myField); // undefined if return {}

// Class without Private variables
class ColorRed {
    constructor(r, g, b) {
        this.values = [r, g, b];
    }
    getRed() {
        return this.values[0];
    }
    setRed(value) {
        this.values[0] = value;
    }
}

let find = new ColorRed(255, 0, 0);
console.log(find.getRed());

let updateRed = find.setRed(200);
console.log(find.getRed());


// Private Fields

class FindColor {
    #values; // Private variable
    constructor(r, g, b) {
        this.#values = [r, g, b];
    }
    getRed() {
        return this.#values[0];
    }
    setRed(value) {
        this.#values[0] = value;
    }
    findDifference(anotherColor) {
        return this.#values[0] - anotherColor.#values[0];
    }
}

let findRed = new FindColor(255, 0, 0);
let newRed = new FindColor(220, 20, 60);
console.log(findRed.findDifference(newRed));

console.log(findRed.getRed());
let newVal = findRed.setRed(200);
console.log(findRed.getRed());

//  Using getter and setter methods

class makeColors {
    #values;
    constructor(r, g, b) {
        this.#values = [r, g, b];
    }
    get red() {
        return this.#values[0];
    }
    set red(value) {
        this.#values[0] = value;
    }
}

let makeAColor = new makeColors(255, 0, 0);
console.log(makeAColor.red);
makeAColor.red = 200;
console.log(makeAColor.red);


// Static
class Square {
    constructor(oneSide) {
        return this.oneSide = oneSide;
    }
    findSquareArea() {
        return this.oneSide * this.oneSide;
    }
    static compareSquares(square1, square2) {
        if (square1.oneSide > square2.oneSide) {
            console.log("Area of square1 is greater");
        }
        else if (square1.oneSide < square2.oneSide) {
            console.log("Area of square2 is greater");
        }
        else {
            console.log("Area of both squares is equal");
        }
    }
}

let square1 = new Square(2);
let square2 = new Square(2);

console.log(square1.findSquareArea(5));
// this is working beacause of this operator


console.log(square1.oneSide);
Square.compareSquares(square1, square2);


// Inheritance

class Animal {
    #properties;
    constructor(name, type, age) {
        this.#properties = [name, type, age];
    }
    get greet(){
        console.log(`Hello ${this.#properties[0]}`);
    }
}

class Cat extends Animal{
    #catName;
    constructor(name, type, age){
        super(name, type, age);
        this.#catName = name;
        // You can have code before super(), but you cannot access 'this' before super()
    }
    voice(){
        console.log(`${this.#catName} says Meowwwww!`);
    }
}

let Animal_1 = new Cat("Colt", "Cat", 3);