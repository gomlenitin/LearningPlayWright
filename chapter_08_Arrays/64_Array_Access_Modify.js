// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log("Print Array values at 0th index- " + statuses[0]);
console.log("Print Array values at 2nd index- " + statuses[2]);

console.log("Print Array values at -1th index- " + statuses.at(-1));//last element
console.log("Print Array values at -2th index- " + statuses.at(-2));
console.log("Print Array values at -3th index- " + statuses.at(-3));
console.log("Print Array values at -4th index- " + statuses.at(-4));

// Modify
statuses[1] = "blocked";
console.log("Print Array values after upatiing index 1 value  " + statuses);

// Length
console.log("Print Array values " + statuses.length);