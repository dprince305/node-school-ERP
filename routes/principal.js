const express = require("express");
const veryfy = require ("../config/auth.js");
const { principalGet } = require('../controller/principal.js');
const principal = express.Router();

principal.get('/', veryfy(["Master"]), principalGet)

module.exports = principal