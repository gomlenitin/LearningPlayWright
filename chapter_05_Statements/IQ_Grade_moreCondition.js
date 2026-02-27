//Write a program that calculates and displays the letter grade for a given numerical score 
//(e.g., A, B, C, D, or F) 
//based on the following grading scale:
//A: 90-100
//B: 80-89
//C: 70-79
//D: 60-69
//F: 35-59

let percentage = "test";

if (percentage <= 100 && typeof percentage != "number") {
    if (percentage >= 90 && percentage <= 100) {
        console.log("Grade A");
    } else if (percentage >= 80 && percentage <= 89) {
        console.log("Grade B");
    } else if (percentage >= 70 && percentage <= 79) {
        console.log("Grade C");
    } else if (percentage >= 60 && percentage <= 69) {
        console.log("Grade D");
    } else if (percentage >= 35 && percentage <= 59) {
        console.log("Grade F");
    } else {
        console.log("Need improvement");
    }
}
else {
    console.log("Invalid percentage Please enter valid percentage again");
}
