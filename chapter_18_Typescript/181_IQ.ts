function buildEndpoint(base: string, path: string): string {
    return base + path;
}

function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

function isStatusCode1(code: number): boolean {
    if (code >= 200 && code < 300) {
        console.log(code + " is success");
        return true;
    } else {
        console.log(code + " is failed");
        return false;
    }

}

function logTestStep(step: string): void {
    console.log("[STEP] " + step);
}

console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isSuccessCode(200));
console.log("404 is success:", isSuccessCode(404));
logTestStep("Navigate to login page");

console.log("200 is success:", isStatusCode1(200));
console.log("404 is success:", isStatusCode1(404));