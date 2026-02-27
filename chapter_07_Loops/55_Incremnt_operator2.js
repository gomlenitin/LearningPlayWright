let a = 10;
let b = ++a;
console.log(a);
console.log(b);

// //  Exp and Result Table
// // Line No | a | Result b
// // 1       |  10 |  NA
// // 2       |  11 |  11
// // 3       | 11 - print | 11
// // 4       | 11 | 11 - print

let c = 10;
console.log(c++ + c);
// // A+B -> A -> a++ (  ExpC - 10, C-> 11 )
// // +`
// // B -> 11, a -> 11 ,
// // Exp A. + ExpB -> 10 + 11

// // ERT
// // Line No. |  c | Exp
// // 13       | 10 | NA
// // 14.      | 11 | 21

let d = 10;
console.log(d++ + ++d);
console.log("Value of d =", d);

// // A + B
// // ExpD -> 10, d -> 11
// // +
// // ExpD -> 12, d-> 12
// // ExpD. + ExpD ->  10+12 -> 22
// // d -> 12
``


let e = 10;
console.log(++e + ++e);
console.log("Value of e", e);

// let a = 10;
// let r = a--;
// let r2 = --a;
// console.log(r);
// console.log(r2);