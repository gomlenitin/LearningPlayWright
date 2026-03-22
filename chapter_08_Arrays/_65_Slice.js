let arr = [1, 2, 3, 5, 6];

// splice(start, deleteCount, ...itemsToAdd)
console.log(arr);
console.log("SPlice --> start, deleteCount, ...itemsToAdd");
arr.splice(2, 1); // removes 1 item at index 2
console.log("Print Array values after removing 1 item at index 2 -> " + arr);

arr.splice(2, 0, 99);
console.log("Print Array values after adding 99 at index 2 -> " + arr);

arr.splice(1, 2, 10, 20);
console.log("Print Array values after adding 10 and 20 at index 1 and removing 99 value at 2nd index ->" + arr);