// You are working API Validation
// response Code - 200, 404, 401, 403.....404

let responseCode = 404;

switch (responseCode) {
    case 200:
        console.log("OK - Request was successful");
        break;
    case 404:
        console.log("Not Found - The requested resource could not be found");
        break;
    case 401:
        console.log("Unauthorized - Authentication is required and has failed or has not yet been provided");
        break;
    case 403:
        console.log("Forbidden - The server understood the request but refuses to authorize it");
        break;
    default:
        console.log("Invalid response code");
        break;

}