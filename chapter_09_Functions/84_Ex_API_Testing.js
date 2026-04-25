
// if (ourStatusCode >= 200 && ourStatusCode < 300) 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}

const validateStatusCode_Arrow1 = (status1) => {
    if (status1 >= 200 && status1 <= 300)
        return "Request is fine!";
    return "Request is Fail!";
}


validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);
console.log(validateStatusCode_Arrow1(203));