const model = require("../models/cars.model");
const uuid = require("uuid");

function getAllCars(req, res) {
	res.json(model.getAll());
}

function getSingleCar(req, res) {
	res.json(model.getSingle(req.params.id));
}

function postCar(req, res) {
	const result = model.add({
		id: uuid.v4(),
		maker: req.body.maker,
		model: req.body.model,
		reg: req.body.reg,
		mileage: req.body.mileage,
		year: req.body.year,
		combi: req.body.combi,
	});

	res.json(result);
}

function deleteCar(req, res) {
	res.json(model.remove(req.params.id));
}

module.exports = {
	getAllCars,
	getSingleCar,
	postCar,
	deleteCar,
};
