const model = require("../models/owners.model");
const uuid = require("uuid");

function getAllOwners(req, res) {
	res.json(model.getAll());
}

function getSingleOwner(req, res) {
	res.json(model.getSingle(req.params.id));
}

function postOwner(req, res) {
	const result = model.add({
		id: uuid.v4(),
		name: req.body.name,
		age: req.body.age,
		email: req.body.email,
		license: req.body.license,
	});

	res.json(result);
}

function deleteOwner(req, res) {
	res.json(model.remove(req.params.id));
}

module.exports = {
	getAllOwners,
	getSingleOwner,
	postOwner,
	deleteOwner,
};
