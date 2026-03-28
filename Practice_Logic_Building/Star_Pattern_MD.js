console.log("-----------left hand pattern----------------");

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

let n = 5;

for (let i = 1; i <= n; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + "*"
    }
    console.log(row.trim());
}

console.log("-----------left hand inverted pattern----------------");

// * * * * *
// * * * *
// * * *
// * *
// * 

for (let i = n; i >= 1; i--) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + "*"
    }
    console.log(row.trim());

}

console.log("---------------Right hand pattern------------------");

//     *
//    **
//   ***
//  ****
// ***** 

for (i = 1; i <= n; i++) {                      // First loop → controls rows
    let row = "";
    console.log("Outer loop " + i);

    for (j = 1; j <= n - i; j++) {               // Second loop → pushes stars right using spaces
        row = row + " "                          // remember 'One White space' mandatory
        console.log("Inner loop 1 (n - i)" + j);
    }
    for (let j = 1; j <= i; j++) {               // builds triangle
        row = row + "*"
        console.log("Inner loop 2 (i)" + j);
    }
    console.log(row);
}

console.log("--------------Right hand inverted pattern--------------");


//  *****
//   ****
//    ***
//     **
//      *

for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row = row + " ";                  // remember 'One White space' mandatory
    }

    for (let j = 1; j <= i; j++) {
        row = row + "*"
    }
    console.log(row);

}

console.log("---------- Pyramid pattern ----------");

//     *
//    ***
//   *****
//  *******
// ********* 

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row = row + " ";                 // remember 'One White space' mandatory
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row = row + "*";
    }
    console.log(row);

}

console.log("---------- Inverted Pyramid pattern ----------");

// *********
//  *******
//   *****
//    ***
//     *

for (let i = n; i >= 1; i--) {

    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row = row + " ";               // remember 'One White space' mandatory
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row = row + "*";
    }
    console.log(row);

}