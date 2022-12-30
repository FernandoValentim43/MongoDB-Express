const express = require("express");
const route = express.Router();

const homeController = require("./controllers/home-controller")

route.get("/", (req, res) => {
    res.send("hello")
})
