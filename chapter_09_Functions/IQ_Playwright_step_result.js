function printReport(results) {
    const totalSteps = results.length;

    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let totalDuration = 0;
    let failedSteps = [];

    for (const step of results) {
        totalDuration += step.durationMs;

        if (step.status === "passed") passed++;
        else if (step.status === "failed") {
            failed++;
            failedSteps.push(step.name);
        }
        else if (step.status === "skipped") skipped++;
    }

    const failedList = failedSteps.join(", ");

    console.log(
        `Total Steps: ${totalSteps} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Total Duration: ${totalDuration}ms Failed Steps: ${failedList}`
    );
}

const results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 }
];

printReport(results);