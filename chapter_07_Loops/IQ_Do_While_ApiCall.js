const Max_Attempt = 5;

let attempt = 0;

do {
    console.log("Attempting to connect to API...");
    attempt++;
    console.log("Attempt " + attempt);

    let randomAttempt = Math.random();

    console.log("Random Attempt " + attempt + " = " + randomAttempt);

    if (randomAttempt > 0.6) {
        //success = true;
        console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
    } else {
        console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
    }

} while (attempt < Max_Attempt);
