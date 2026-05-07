// void
function sayHello(msg: string): void {
    console.log(msg);
}
sayHello("Hello World");
let voidResult = sayHello("Void return nothing");
console.log("Result of voidResult is : " + voidResult);


// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
    //A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value
    // console.log(name); // we canot call without return statement.
}
greet("Test greet"); // it is retruining value hence will not print directly
console.log("Result of greet is : " + greet("Expert"));


// never - function never returns (throws or infinite loop)
// we never use in code
function throwError(message: string): never {
    throw new Error(message);
}

// we never use in code
function infiniteLoop(): never {
    while (true) { }
}