let [a, b, c] = ["apple", "banana", "grapes"];
console.log(a); // "apple"
console.log(b); // "banana" 
console.log(c); // "grapes"

console.log("+++++++++++++++++++++");
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4,5]   
console.log("+++++++++++++++++++++");

let [x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

// Swap values
[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10