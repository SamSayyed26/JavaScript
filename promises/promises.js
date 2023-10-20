// Creating Callback Hell, Pyramid of Doom

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "indigo";
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = "violet";
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);


// // Creating a generic function for callback hell

// const rainbowBackground = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color
//         doNext();
//     }, delay
//     );
// }

// rainbowBackground("red", 1000, () => {
//     rainbowBackground("orange", 1000, () => {
//         rainbowBackground("yellow", 1000, () => {
//             rainbowBackground("green", 1000, () => {
//                 rainbowBackground("blue", 1000, () => {
//                     rainbowBackground("indigo", 1000, () => {
//                         rainbowBackground("violet", 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// // Creating a fake callback hell through setTimeout

// const fakeCallbackHell = (url, resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             reject('Connection Timeout :(')
//         } else {
//             resolve(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeCallbackHell("books.com/page1",
//     function (resolve) {
//         console.log("it worked");
//         console.log(resolve);
//         fakeCallbackHell("books.com/page2",
//             function (resolve) {
//                 console.log("it worked twice");
//                 console.log(resolve);
//                 fakeCallbackHell("books.com/page3",
//                     function (resolve) {
//                         console.log("it worked thrice");
//                         console.log(resolve);
//                     },
//                     function (reject) {
//                         console.log("Error");
//                         console.log(reject);
//                     }
//                 )
//             },
//             function (reject) {
//                 console.log("Error");
//                 console.log(reject);
//             }
//         )
//     },
//     function (reject) {
//         console.log("Error");
//         console.log(reject);
//     }
// );

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }


// // A more complex syntax
// fakeRequestPromise("books.com/api/page1")
//     .then((res) => {
//         console.log("Resolved 1");
//         console.log(res);
//         fakeRequestPromise("books.com/api/page2")
//             .then((res) => {
//                 console.log("Resolved 2");
//                 console.log(res);
//                 fakeRequestPromise("books.com/api/page3")
//                     .then((res) => {
//                         console.log("Resolved 3");
//                         console.log(res);
//                     })
//                     .catch(err => {
//                         console.log("Error");
//                         console.log(err);
//                     })
//             })
//             .catch(err => {
//                 console.log("Error");
//                 console.log(err);
//             })
//     })
//     .catch(err => {
//         console.log("Error");
//         console.log(err);
//     })

// // a bit nicer syntax
// fakeRequestPromise("books.com/page1")
//     .then(res => {
//         console.log("Resolved 1", res);
//         return fakeRequestPromise("books.com/page2");
//     })
//     .then(res => {
//         console.log("Resolved 2", res);
//         return fakeRequestPromise("books.com/page3");
//     })
//     .then(res => {
//         console.log("Resolved 3", res);
//     })
//     .catch(err => {
//         console.log("Error", err);
//     })


// // async/await
// // Async and await is just syntactic sugar over the callback hell.
// // It uses Promises and async/await to resolve this issue

// async function newPromiseFunction(num) {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     let time = new Promise((res, rej) => {
//         setTimeout(() => {
//             if (delay > 4000) {
//                 rej("Error");
//             }
//             else {
//                 res(num * num);
//             }
//         }, delay);
//     });
//     let ans = await time;
//     alert(ans);
// }
// newPromiseFunction(2);

// async function cube(width) {
//     const areaOfSquare = new Promise((resolve, reject) => {
//         resolve(width * width);
//         reject("Error in calculating the data of the square");
//     });

//     const areaOfCube = await areaOfSquare * 6;

//     console.log("AREA of Cube: ", areaOfCube)
// }

// cube(2);

let newFunction = async () => {
    await new Promise((res, rej) => { setTimeout(() => { res(document.body.style.backgroundColor = "Red") }, 1000) });
    await new Promise((res, rej) => { setTimeout(() => { res(document.body.style.backgroundColor = "Orange") }, 1000) });
    await new Promise((res, rej) => { setTimeout(() => { res(document.body.style.backgroundColor = "Yellow") }, 1000) });
    await new Promise((res, rej) => { setTimeout(() => { res(document.body.style.backgroundColor = "Green") }, 1000) });
    await new Promise((res, rej) => { setTimeout(() => { res(document.body.style.backgroundColor = "Blue") }, 1000) });
    await new Promise((res, rej) => { setTimeout(() => { res(document.body.style.backgroundColor = "Indigo") }, 1000) });
    await new Promise((res, rej) => { setTimeout(() => { res(document.body.style.backgroundColor = "Violet") }, 1000) });
}

newFunction();


let newDataAPI = async () =>{
    return new Promise((res, rej) => {
        let delay = Math.floor(Math.random()* 4500 ) + 500;
        setTimeout(() =>{
            if(delay > 4000){
                rej("Yeah your API didn't work")
            }
            else{
                res("Worked. Here is your Data");
            }
        }, delay)
    })
}