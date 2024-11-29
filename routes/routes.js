const express = require("express");
const signUp = require("./signup.js")
const signIn = require("./signIn.js")
const principal = require("./principal.js")
const routes = express.Router();

routes.use("/signUp", signUp)
routes.use("/signIn", signIn)
routes.use("/principal", principal)

module.exports = routes