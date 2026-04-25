// Step 1 Browser opened!
// Step 2 : Login page loaded
// Step 3 : Credentials entered
// Step 4 : Logged in successfully
// Done execution!

function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!")
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded")
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Crednetials entered")
    });
}

function clickOnLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully!")
    })
}

openBrowser()
    .then(function (msg) {
        console.log("Step 1 :" + msg);
        return goToLogin();
    })
    .then(function (msg) {
        console.log("Step 2 :" + msg);
        return enterCredentials();
    })
    .then(function (msg) {
        console.log("Step 3 :" + msg);
        return clickOnLogin();
    })
    .then(function (msg) {
        console.log("Step 4 :" + msg);

    })
    .catch(function (error) {
        console.log("Error :" + error);
    })
    .finally(function () {
        console.log("Done execution!")
    })