// Basic Async/Await

async function getTestResults() {
    return "pass";
}

getTestResults()
    .then(function (result) {
        console.log(result)
    })

async function runTest() {
    let result1 = await Promise.resolve("Login test Passed")
    console.log(result1)

    let result2 = await Promise.resolve("Dashboard test Passed")
    console.log(result2)
}

runTest();