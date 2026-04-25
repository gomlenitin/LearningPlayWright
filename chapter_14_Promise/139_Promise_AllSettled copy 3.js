function loginTest() {
    return Promise.resolve("Login Successfull");
}

function addToCartTest() {
    return Promise.reject("Add to cart button is not working");
}

function paymentTest() {
    return Promise.resolve("Payment completed");
}

Promise
    .allSettled([loginTest(), addToCartTest(), paymentTest()])
    .then(function (result) {
        result.forEach(function (result, index) {
            console.log("Test case " + (index + 1) + " : ", result.status, " - ", result.value || result.reason);
        })
    })