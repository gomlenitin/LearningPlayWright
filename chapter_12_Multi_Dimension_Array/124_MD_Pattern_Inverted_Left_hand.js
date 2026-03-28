// *****
// ****
// ***
// **
// *

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    //console.log('Outer loop {i}' + row);

    for (let j = 1; j <= i; j++) {
        row += "*";
        // console.log('Inner loop {j}' + row);
    }
    console.log(row);
}