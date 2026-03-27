
// Problem: Reverse a string

// 👉 Think like this:

// I get a string "hello"
// I need "olleh"
// I will go from last character to first
// 3. Break into steps (most important)

// Example:

// Start from last index
// Take each character
// Add to new string
// Return result

function reverse_String(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
        console.log(result);

    }
    return result;
}

let str = "hello";

console.log(reverse_String(str));


function reverse1(string) {
    let newString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newString = newString + string[i];
    }
    return newString;

}

let str1 = "World";
console.log(reverse1(str1));



