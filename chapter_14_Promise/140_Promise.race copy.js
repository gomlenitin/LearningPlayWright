let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }, 100);
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 500ms")
    }, 500);
})

Promise
    .race([fastServer, slowServer])
    .then(function (winner) {
        console.log("Winner :", winner)
    })
    .catch(function (error) {
        console.log("Error :", error)
    })
    .finally(function () {
        console.log("Done execution!")
    })