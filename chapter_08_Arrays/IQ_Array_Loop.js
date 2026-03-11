
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

let passCount = 0;
let failCount = 0;
let skipCount = 0;

for (let i = 0; i <= testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    }
    else if (testResults[i] === "fail") {
        failCount++;
    }
    else if (testResults[i] === "skip") {
        skipCount++;
    }
}

console.log("Pass Count: " + passCount);
console.log("Fail Count: " + failCount);
console.log("Skip Count: " + skipCount);

let totalTests = testResults.length;
console.log("Total Tests: " + totalTests);
let passRate = (passCount / totalTests) * 100;
console.log("Pass Rate: " + passRate + "%");

let verdict;
if (failCount === 0) {
    verdict = "Ready for release"
} else if (failCount <= 2) {
    verdict = "Review Required"
} else {
    verdict = "Block release"
}
console.log("Verdict: " + verdict);