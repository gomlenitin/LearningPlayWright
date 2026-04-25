// Flaky Test ->  100 TC, 3 Failed, I want to rerun them 3, these are flaky, it sometimes pass, failed...
//3  I want to re run

// Retry Pattern with Async/Await - REAL QA
let attempt = 0;

function flakyAPI() {
    attempt++;
    if (attempt < 3) {
        return Promise.reject("Attempt " + attempt + " Failed!")
    }
    return Promise.resolve("Attemept " + attempt + " Success!")
}



async function retryTesting(maxRetries) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            let result = await flakyAPI();
            console.log("Success", result);
            return;
            //break;

        } catch (error) {
            console.log("failed", error);

        }
    }


}

retryTesting(5);

