// Function Expression

const square = (x) => {
    return x * x;
}
console.log(square(2));

const print = () => {
    return "Hello World";
}
console.log(print());

function myFunc() {
    return "hello";
}
let m = myFunc();
console.log(m);

console.log("--------------------");

function statement() {
    return "Bring it back";
}

let s = statement();
console.log(s);
let h = (s = statement());

console.log(s = statement());
console.log(h);

// 
console.log("--------------------");
(function getvalue() {
    let p = q = r = 1;
})();

console.log(q);
console.log(r);
// console.log(p);

console.log("--------------------");
const createPet = function (name) {
    let sex;

    const pet = {
        // setName(newName) is equivalent to setName: function (newName)
        // in this context
        setName(newName) {
            name = newName;
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },

        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex;
            }
        },
    };

    return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver


//    Rest Parameters
console.log("--------------------");
function restParams(multiplier, ...theArgs) {
    return theArgs.map(value => multiplier * value);
}

let arr = restParams(2, 1, 2, 3, 4);
console.log(arr);