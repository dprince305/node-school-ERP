const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const db = require("./config/db.js")
const app = express();
const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server is running on port http://localhost:${PORT}`);
    }
})