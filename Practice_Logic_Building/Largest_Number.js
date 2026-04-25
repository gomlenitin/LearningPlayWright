function largestNumber(arr) {
    let largest = arr[0];

    for (let i = 1; i <= arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [9, 10, 7, 4, 7];
console.log("Largest Number is " + largestNumber(arr));