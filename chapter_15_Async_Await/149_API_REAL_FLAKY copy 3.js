// Flaky Test ->  100 TC, 3 Failed, I want to rerun them 3, these are flaky, it sometimes pass, failed...
//3  I want to re run

// Retry Pattern with Async/Await - REAL QA

let attempt = 0;

function flakyApi() {
    attempt++;
    if (attempt < 3) {
        return Promise.reject("Attempt " + attempt + " failed!")
    }
    return Promise.resolve("Attempt " + attempt + " Success")
}

async function runTest(maxRttries) {
    for (let i = 0; i <= maxRttries; i++) {
        try {
            let result = await flakyApi();
            console.log("Pass Promise! Exit also", result)
            break;

        } catch (error) {
            console.log("Fail Promise", error)

        }
    }

}
runTest(5)

