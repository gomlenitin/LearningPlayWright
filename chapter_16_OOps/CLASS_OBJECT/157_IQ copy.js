class APIClient {

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(path) {
        return this.baseURL + path;
    }

}

let stagignUrl = new APIClient("https://staging.api.com");
let prodUrl = new APIClient("https://prod.api.com");

console.log(stagignUrl.get("/users"));
console.log(prodUrl.get("/users"));

