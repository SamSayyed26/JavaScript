let stringData = "()()()(({}[[))]]";
// let stringData = "[[(]])";
// let stringData = "{{({}({}))}";
// let stringData = "{{({}({}))}}";


let pattern = /[^()\[\]{}]/g;
let stackOfBrackets = [];

let testTheString = pattern.test(stringData);
if(!testTheString && stringData.length >= 1 && stringData.length <= 104){
    console.log("String: ", stringData);
    for(let eachStringData of stringData){
        
        if(eachStringData === "[" || eachStringData === "{" || eachStringData === "("){
            stackOfBrackets.push(eachStringData);
        }
        if(eachStringData === ")" && stackOfBrackets[stackOfBrackets.length-1] === "("){
            stackOfBrackets.pop();
        }
        else if(eachStringData === "}" && stackOfBrackets[stackOfBrackets.length-1] === "{"){
            stackOfBrackets.pop();
        }
        else if(eachStringData === "]" && stackOfBrackets[stackOfBrackets.length-1] === "["){
            stackOfBrackets.pop();    
        }
    }
}
else{
    console.log("String cannot contain anything else than brackets");
}

if(stackOfBrackets.length < 1){
    console.log("Correct String");
}
else{
    console.log("Incorrect String");
}