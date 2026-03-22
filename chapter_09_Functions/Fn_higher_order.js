function greet(name) {
    return "Hello " + name;
}

function processUser(fn) {
    console.log(fn("Nitin"));
}

processUser(greet);