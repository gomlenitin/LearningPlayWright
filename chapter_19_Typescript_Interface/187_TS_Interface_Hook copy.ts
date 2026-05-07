//function interface
interface testhook {
    (testName: string): void;
}

//function 1: beforeTest
let beforeTest: testhook = function (testname: string): void {
    console.log("Test case before execution of: " + testname);
}

beforeTest("Login Test");

//function 2: afterTest
let afterTest: testhook = function (testname: string): void {
    console.log("Test case after execution of: " + testname);
}

//object interface
interface testRunner {
    id: number;
    name: string;
    status: string;
    duration: number;
}

//object : test
let test: testRunner = {
    id: 1,
    name: "Login Test",
    status: "PASS",
    duration: 1000
}

console.log("TC-" + test.id + ": " + test.name + " → " + test.status + " → Time:" + test.duration);

afterTest("Login Test");


