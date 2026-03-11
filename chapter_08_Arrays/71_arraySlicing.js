let arr = [1, 2, 3, 4, 5, 6];

// slice (Start index, end index-1) -> return new array from start to end, does not mutat
// slice (-ve) -> return new array from end, does not mutat

let sliceArray = arr.slice(1, 4); // i.e  slice(1, 4-1=3); -> return new array from index 1 to 3
console.log(sliceArray);

console.log(arr.slice(2)); // i.e  slice(2, 6-1=5); -> return new array from index 2 to 5
console.log(arr.slice(-2)); // i.e  arr[-6,-5,-4,-3,-2,-1] -> return new array from index -1 to -2
console.log(arr.slice(-3)); // i.e  arr[-6,-5,-4,-3,-2,-1] -> return new array from index -1 to -3
console.log(arr.slice(0)); // i.e  slice(0, 6-1=5); -> return new array from index 0 to 5

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);
c = a.concat(b, [5, 6]);
console.log(c);

//spread (modern way) - only for concatenation 
let d = [...a, ...b];
console.log(d);

//join 
let s = ["pass", "fail", "skip"].join(' = ');
console.log(s);