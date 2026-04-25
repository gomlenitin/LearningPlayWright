let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise
    .all([checkAuth, checkDB, checkCache])
    .then(function (result) {
        console.log("All checks :", result);
    })
    .catch(function (error) {
        console.log("Error :", error);
    })
    .finally(function () {
        console.log("Done execution for programm one!");
    });

Console.log("Example Two")

let checkAuth1 = Promise.resolve("Auth OK");
let checkDB1 = Promise.reject("DB DOWN");
let checkCache1 = Promise.resolve("Cache OK");

Promise
    .all([checkAuth1, checkDB1, checkCache1])
    .then(function (result) {
        console.log("All checks :", result);
    })
    .catch(function (error) {
        console.log("Error :", error);
    })
    .finally(function () {
        console.log("Done execution for programm two!");
    });