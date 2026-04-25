function smallestNumber(arr) {
    let smallest = arr[0];

    for (let i = 1; i <= arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [7, 2, 3, 4, 5];
console.log("Smallest Number is " + smallestNumber(arr));