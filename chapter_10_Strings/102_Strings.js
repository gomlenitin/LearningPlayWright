// Strings

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;  // template literal

console.log(url);
console.log(status);
console.log(message);


// Single quotes
let a = 'hello';
console.log(a);

// Double quotes
let b = "world";
console.log(b);

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
console.log(name1);
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);


// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
console.log(report);

// String() constructor (converts other types)
console.log(String(200));
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String([1, 2])); // "[1,2]"