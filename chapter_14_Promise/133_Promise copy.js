// A Promise is an OBJECT. It wraps a value that will be available later.

// order: foodready = true → resolves
let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered!")
    } else {
        reject("Order Cancelled!")
    }
})

order
    .then(function (message) {
        console.log("order resolved:", message);
    })
    .catch(function (message) {
        console.log("order rejected:", message);
    });

// order1: foodready1 = false → rejects
let order1 = new Promise(function (resolve, reject) {
    let foodready1 = false;
    if (foodready1) {
        resolve("Pizza is delivered!")
    } else {
        reject("Order Cancelled!")
    }
})

order1
    .then(function (message) {
        console.log("order1 resolved:", message);
    })
    .catch(function (message) {
        console.log("order1 rejected:", message);
    });
