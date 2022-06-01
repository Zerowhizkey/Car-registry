let cars = [];

function getAll() {
	return cars;
}

function getSingle(id) {
	const foundCar = cars.find((car) => car.id === id);
	return foundCar;
}

function add(car) {
	cars.push(car);
	return cars;
}

function remove(id) {
	cars = cars.filter((car) => car.id !== id);
	return cars;
}

module.exports = {
	getAll,
	getSingle,
	add,
	remove,
};
/**
 * {
 *   id: string
 *   maker: string,
 *   model: string,
 *   reg: string,
 *   mileage: number,
 *   year: number,
 *   combi: boolean
 * }
 */
