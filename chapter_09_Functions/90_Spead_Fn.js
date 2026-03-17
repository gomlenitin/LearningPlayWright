function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
add(...num);  //. sum -> 6
console.log(add(...num));

// ------- 

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];

console.log(hasError(...responseCodes)); //  true


function add1(a, b, c) {
    return 1 + b + c;
}

console.log(add1(1, 2, 4));
