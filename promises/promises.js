// Creating Callback Hell, Pyramid of Doom

setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "orange";
        setTimeout(() => {
            document.body.style.backgroundColor = "yellow";
            setTimeout(() => {
                document.body.style.backgroundColor = "green";
                setTimeout(() => {
                    document.body.style.backgroundColor = "blue";
                    setTimeout(() => {
                        document.body.style.backgroundColor = "indigo";
                        setTimeout(() => {
                            document.body.style.backgroundColor = "violet";
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);


// Creating a generic function for callback hell

const rainbowBackground = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color
        doNext();
    }, delay
    );
}

rainbowBackground("red", 1000, () => {
    rainbowBackground("orange", 1000, () => {
        rainbowBackground("yellow", 1000, () => {
            rainbowBackground("green", 1000, () => {
                rainbowBackground("blue", 1000, () => {
                    rainbowBackground("indigo", 1000, () => {
                        rainbowBackground("violet", 1000, () => {

                        })
                    })
                })
            })
        })
    })
})


// Creating a fake callback hell through setTimeout

const fakeCallbackHell = (url, resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            reject('Connection Timeout :(')
        } else {
            resolve(`Here is your fake data from ${url}`)
        }
    }, delay)
}

fakeCallbackHell("books.com/page1",
    function (resolve) {
        console.log("it worked");
        console.log(resolve);
        fakeCallbackHell("books.com/page2",
            function (resolve) {
                console.log("it worked twice");
                console.log(resolve);
                fakeCallbackHell("books.com/page3",
                    function (resolve) {
                        console.log("it worked thrice");
                        console.log(resolve);
                    },
                    function (reject) {
                        console.log("Error");
                        console.log(reject);
                    }
                )
            },
            function (reject) {
                console.log("Error");
                console.log(reject);
            }
        )
    },
    function (reject) {
        console.log("Error");
        console.log(reject);
    }
);

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// A more complex syntax
fakeRequestPromise("books.com/api/page1")
    .then((res) => {
        console.log("Resolved 1");
        console.log(res);
        fakeRequestPromise("books.com/api/page2")
            .then((res) => {
                console.log("Resolved 2");
                console.log(res);
                fakeRequestPromise("books.com/api/page3")
                    .then((res) => {
                        console.log("Resolved 3");
                        console.log(res);
                    })
                    .catch(err => {
                        console.log("Error");
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log("Error");
                console.log(err);
            })
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

// a bit nicer syntax
fakeRequestPromise("books.com/page1")
    .then(res => {
        console.log("Resolved 1", res);
        return fakeRequestPromise("books.com/page2");
    })
    .then(res => {
        console.log("Resolved 2", res);
        return fakeRequestPromise("books.com/page3");
    })
    .then(res => {
        console.log("Resolved 3", res);
    })
    .catch(err =>{
        console.log("Error", err);
    })