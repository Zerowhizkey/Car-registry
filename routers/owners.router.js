const express = require("express");

const controllers = require("../controllers/owners.controller");

const ownersRouter = express.Router();

ownersRouter.get("/", controllers.getAllOwners);

ownersRouter.get("/:id", controllers.getSingleOwner);

ownersRouter.post("/", controllers.postOwner);

ownersRouter.delete("/:id", controllers.deleteOwner);

module.exports = ownersRouter;
