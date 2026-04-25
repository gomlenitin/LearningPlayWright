class Car {
    #engine;

    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(newEngine) {
        this.#engine = newEngine;
    }

}

let hyundai = new Car("Hyundai", "V6");
console.log(hyundai.name);
console.log(hyundai.getEngine());
hyundai.setEngine("v8");
console.log(hyundai.getEngine());