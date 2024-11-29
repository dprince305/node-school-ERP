const express = require("express");
const { signUp } = require("../controller/signUp.js");
const signup = express.Router();

signup.post("/", signUp)

module.exports = signup