// Primitive types

let name123: string = "John";
let age: number = 30;
let pi: number = 3.14;
let distance_to_moon: number = 398765434567;
// let pi: float = 3.14;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";


// Arrays
let numbers: number[] = [1, 2, 3];
console.log(numbers);

let names: Array<string> = ["John", "Jane"];
console.log(names);

let names1: string[] = ["John", "Jane"];
console.log(names1);