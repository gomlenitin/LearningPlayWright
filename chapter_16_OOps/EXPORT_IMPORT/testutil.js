export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Pramod"; // This is not exported. That's why you cannot import it into other classes. 

export let BASE_URL1 = "https://app.vwo.com";

export function formatUpperCaseString2(sname2) {
    return sname2.toUpperCase();
}

let fname2 = "Pramod"; // This is not exported. That's why you cannot import it into other classes. 