let year = 2026;
let isLeapYear = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true; // Divisible by 400
        } else {
            isLeapYear = false; // Divisible by 100 but not 400
        }
    } else {
        isLeapYear = true; // Divisible by 4 but not 100
    }
} else {
    isLeapYear = false; // Not divisible by 4
}

console.log(`${year} is a leap year: ${isLeapYear}`);