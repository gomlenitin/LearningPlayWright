class TestRunner {
    static totalTest = 0;
    static passCount = 0;

    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTest++;
        if (passed == true) {
            TestRunner.passCount++;
        }
    }

    non_static_display() {
        return this.name;
    }

    static summary() {
        return TestRunner.passCount + "/" + TestRunner.totalTest + " passed"
    }

}

new TestRunner("Login", true);
new TestRunner("SignUp", false);
new TestRunner("Cart", true);
new TestRunner("Checkout", true);

console.log(TestRunner.summary());
