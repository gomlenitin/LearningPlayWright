
console.log("Executing for loop")

for (let n = 1; n <= 20; n++) {   //(Initi; condition; incrememnt)
    if (n % 2 === 0) {
        console.log("This is Even Number -" + n)
    } else {
        console.log("This is Not a Even Number -" + n)
    }

}

console.log("Executing while loop")
let i = 1;      // Initi

while (i <= 20) {   //condition
    if (i % 2 === 0) {
        console.log("This is Even Number -" + i)

    } else {
        console.log("This is Not a Even Number -" + i)
    }
    i++;            //incrememnt
}