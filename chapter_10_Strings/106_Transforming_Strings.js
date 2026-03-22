// Transforming Strings

let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespace
console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // // "Test: PASS. Retry: FAIL."  (first only)
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regex

// Concatenation

console.log("Hello" + " " + "World");
console.log("Hello".concat(" ", "World"));
console.log(`${"Hello"} ${"World"}`);

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

// Splitting & Joining
console.log("pass,fail,skip".split(","));  // ["pass", "fail", "skip"]
console.log("hello".split(""));  // ["h","e","l","l","o"]

console.log("test_login_pass".split("_").join(" ")); // "test login pass"


// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);