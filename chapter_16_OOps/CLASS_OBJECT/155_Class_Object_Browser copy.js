class TestCase {

    constructor(testName, testStatus, testpriority) {
        this.testName = testName;
        this.testStatus = testStatus;
        this.testpriority = testpriority;

    }

    display() {
        console.log(this.testName + " -> " + this.testStatus + " -> " + this.testpriority);
    }
}

let signUpTest = new TestCase("Sign Up Test", "PASSED", "P0");
let loginTest = new TestCase("Login Test", "PASSED", "P1");
let logoutTest = new TestCase("Logout Test", "FAILED", "P3");

signUpTest.display();
loginTest.display();
logoutTest.display();

// p0 - learn
// p1 - pratice
// p2 - test / implement
// p3 - IPL

// Function vs Method
// method is functions but inside the class :)