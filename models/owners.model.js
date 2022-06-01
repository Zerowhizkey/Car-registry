let owners = [];

function getAll() {
	return owners;
}

function getSingle(id) {
	const foundOwner = owners.find((owner) => owner.id === id);
	return foundOwner;
}

function add(owner) {
	owners.push(owner);
	return owners;
}

function remove(id) {
	owners = owners.filter((owner) => owner.id !== id);
	return owners;
}

module.exports = {
	getAll,
	getSingle,
	add,
	remove,
};
/**
 * {
 *   id: string,
 *   name: string,
 *   age: number,
 *   email: string,
 *   license: boolean
 * }
 */
