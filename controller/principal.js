const principalModel = require("../model/signIn/signIn")
const bcrypt = require ("bcrypt");
const token = require("jsonwebtoken");

const principalGet = async (req, res) => {
    res.status(202).json({
        "msg": "Principal"
    })
}

module.exports = principalGet