const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://dholariyaprince15:52324848@tecapi.xt8gx.mongodb.net/TeacherApi")
    .then(() => console.log("database connected"))
    .catch((err) => console.log("err", err))

module.exports = db