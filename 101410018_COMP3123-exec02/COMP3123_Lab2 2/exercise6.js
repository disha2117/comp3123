class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    displayBalance() {
        console.log(`Balance: $${this.balance}`);
    }
}

const sedan = new Sedan("Toyota Camry", 2024, 25000);

sedan.displayInfo();
sedan.displayBalance();