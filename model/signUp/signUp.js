const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Master", "Principal", "Teacher"],
        required: true
    }
})

module.exports = mongoose.model('signUp', signUpSchema)

