const express = require("express");
const route = express.Router();

const homeControllers = require("./controllers/home-controllers")

route.get("/", homeControllers.home)
route.post("/", homeControllers.homePost)

module.exports = route;