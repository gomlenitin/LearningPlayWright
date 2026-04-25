class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return "Account balance is -> " + this.#balance;
    }

    setBalance(newbalanace, isCashier) {
        if (isCashier == true) {
            this.#balance = newbalanace;
        } else {
            console.log("Not Allowed");
        }
    }

}

let joy_bank = new ICICI("joy", 50000)
console.log(joy_bank.getBalance());

joy_bank.setBalance(1000000000, true);
console.log(joy_bank.getBalance());

joy_bank.setBalance(1000000, false);
