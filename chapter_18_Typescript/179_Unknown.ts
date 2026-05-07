let unknown1: unknown = "hello";

if (typeof unknown1 === "string") {
    console.log("Hi");
}

let message1: string = "Hello";

let username: string;
let userId: number;

// Function annotations
function greet1(name: string): string {
    return `Hello, ${name}`;
}

let fncall = greet1("Test");
console.log(fncall);

// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;
let result = multiply(4, 5);
console.log("Multiply Result is : " + result);

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};

let user1: { name1: string; age1: number } = {
    name1: "john",
    age1: 37
};