class Car {
	constructor(brand) {
		this.carname = brand;
	}
	present() {
		return 'I have a ' + this.carname;
	}
}

let myCar1 = new Car("Ford");
let myCar2 = new Car("VolksWagen");

class Model extends Car {
	constructor(brand, mod) {
		super(brand);
		this.model = mod;
	}
	show() {
		return this.present() + ', it is a ' + this.model;
	}
}

let myCar3 = new Model("Ford", "Mustang");

class Garage {
	constructor() {
		this.car = new Car("Fiat");
	}
	present() {
		this.car.present();
	}
}

let garage = new Garage();

class TopList {
	constructor() {
		this.cars = [];
	}
	add(car) {
		this.cars.push(car);
	}
}

let tops = new TopList();

tops.add(myCar2);
tops.add(myCar3);

