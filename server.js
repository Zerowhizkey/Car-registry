const express = require("express");

const carsRouter = require("./routers/cars.router");
const ownersRouter = require("./routers/owners.router");

const app = express();

// Middlewares
app.use(express.json());

app.use("/owners", ownersRouter);
app.use("/cars", carsRouter);

app.listen(4000, () => {
	console.log("Servern kör på port 4000");
});
