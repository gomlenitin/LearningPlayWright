let str = "  PASS  ";
console.log(str.trim().toLowerCase()); // c) "pass"

// a) " pass "
// b) "PASS"
// c) "pass"

// Ans -> c

let len = "pass,fail,skip";
console.log(len.split(",")); // ["pass", "fail", "skip"]
console.log(len.split(",").length); // 3

let str1 = "hello";  // Things are immutable in nature in Java. 
str1[0] = "H";
console.log(str1);

//Which correctly extracts `"staging"` from this URL?

let url = "https://staging.example.com";
console.log(url.split(".")[0]);
console.log(url.slice(8, 15)); // correct
console.log(url.split("://")[1].split(".")[0]); // correct

//- a) `url.split(".")[0]`
//- b) `url.slice(8, 15)`
//- c) `url.split("://")[1].split(".")[0]`
//- d) **Both b and c**

//What does this return?


let str2 = "Error: 404 Not Found".match(/\d+/g);
console.log(str2); // b) ["404"]

// a) `"404"`
// b) `["404"]`
// c) `[404]`
// d) `null` 
