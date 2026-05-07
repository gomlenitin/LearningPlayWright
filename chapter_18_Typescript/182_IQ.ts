let statusCode: number[] = [200, 201, 404, 500];
let testSuites: string[] = ["Smoke", "Regression", "Sanity"];

console.log("Status codes:", statusCode);
console.log("Suites:", testSuites);

let statusCode1: number[] = [200, 201, 400, 500];
let testSuit1: Array<String> = ["Smoke", "Regression", "Sanity"];

console.log("Status codes 1 :", statusCode1);
console.log("Test Suites 1 :", testSuit1);


let testResult: { name: string; status: string; duration: number } = {
    name: "Login Test",
    status: "PASS",
    duration: 1200
};

console.log(testResult.name + " → " + testResult.status + " (" + testResult.duration + "ms)");



let testResult1: { name: string, status: string, duration: number } = {
    name: "LoginTest",
    status: "Pass",
    duration: 500
}

console.log(testResult1.name + " → " + testResult1.status + " (" + testResult1.duration + "ms)");