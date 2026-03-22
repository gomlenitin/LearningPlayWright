let url = "https://staging.example.com";
console.log(url.split(".")[0]);
console.log(url.slice(8, 15)); // correct
console.log(url.split("://")[1].split(".")[0]); // correct

//- a) `url.split(".")[0]`
//- b) `url.slice(8, 15)`
//- c) `url.split("://")[1].split(".")[0]`
//- d) **Both b and c**

// 🔹 Step 1: Split by "://"
// url.split("://")
// Output: ["https", "staging.example.com"]

// 👉 Explanation:

// It splits the URL into:
// Protocol → "https"
// Rest → "staging.example.com"

// 🔹 Step 2: Access [1]
// url.split("://")[1]

// Output:"staging.example.com"

// 👉 We take the second part (domain + subdomain).


// 🔹 Step 3: Split by "."
// "staging.example.com".split(".")

// Output:["staging", "example", "com"]

// 🔹 Step 4: Access [0]
// .split(".")[0]

// Output:"staging"

// ✅ Final Output:
// staging
