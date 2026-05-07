function countPassTest(result: string[]): number {
    let count: number = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == 'Passed') {
            count++
        }
    }
    return count;
}

function printTestSummary(totalCases: number, passed: number): void {
    console.log("Pass Test Cases : " + passed + "/" + totalCases);
    console.log("Failed Test Cases : " + (totalCases - passed) + "/" + totalCases);

}

let testResult: string[] = ["Passed", "Failed", "Passed", "Passed", "Failed"];
let totalCases = testResult.length;
let passed = countPassTest(testResult);

printTestSummary(totalCases, passed);