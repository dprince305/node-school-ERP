const express = require("express");
const { signin } = require("../controller/signIn.js");
const signIn = express.Router();

signIn.post("/", signin)

module.exports = signIn