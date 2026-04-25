// Private Fields (#) — Hidden Data
// PUBIC Fields 
class Credentials {
    #apikey;

    constructor(user, key) {
        this.user = user;
        this.#apikey = key;
    }

    callinApiKey() {
        return "The Screate Key Is" + this.#apikey;
    }

}

let user1 = new Credentials("Admin", "AB$@GF!GG");
console.log(user1.user);
// console.log(user1.#apikey); // error
console.log(user1.callinApiKey());