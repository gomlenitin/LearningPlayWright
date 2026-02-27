let a = 5;
let b = a++ + ++a; // 5 + 7 i.e(6+1) = 12
let c = a++ + ++a + ++a + ++a + a++; // 7 + (8+1)9 + (9+1)10 + (10+1)11 + 11 = 

console.log(b);
console.log(a); // 11+1 = 12
console.log(c);
console.log(a); // 11+1 = 12