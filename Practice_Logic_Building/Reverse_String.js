
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

// Why i = string.length - 1?
// string.length = 5
// But ❗
// Last index is NOT 5 → it is 4

// Index positions are:
// W   o   r   l   d
// 0   1   2   3   4

// Last index = length - 1
// So:
// 5 - 1 = 4
