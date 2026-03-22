function runStep(stepName, actionFn) {
    console.log(`Starting: ${stepName}`);

    try {
        const result = actionFn();

        return {
            stepName,
            passed: true,
            message: result
        };
    } catch (error) {
        return {
            stepName,
            passed: false,
            message: error.message
        };
    }
}

const res1 = runStep("open dashboard", () => "Page loaded");
console.log(res1);