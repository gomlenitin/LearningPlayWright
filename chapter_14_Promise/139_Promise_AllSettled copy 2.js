function loginTest() {
    return new Promise(function (resolve) {
        resolve("Login successful");
    })
}

function addToCartTest() {
    return Promise.reject("Add to cart button not working");
}

function paymentTest() {
    return Promise.resolve("Payment completed");
}

Promise
    .allSettled([loginTest(), addToCartTest(), paymentTest()])
    .then(function (results) {
        results.forEach(function (result, index) {
            console.log("Test Case " + (index + 1) + ":", result.status, "-", result.value || result.reason);
        });
    });