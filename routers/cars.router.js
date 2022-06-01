const express = require("express");

const controllers = require("../controllers/cars.controller");

const carsRouter = express.Router();

carsRouter.get("/", controllers.getAllCars);

carsRouter.get("/:id", controllers.getSingleCar);

carsRouter.post("/", controllers.postCar);

carsRouter.delete("/:id", controllers.deleteCar);

module.exports = carsRouter;
