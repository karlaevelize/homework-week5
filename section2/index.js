const express = require("express");
const port = 4000;
const db = require("./sequelize-rest");
const app = express();
const Movie = require("./movies/model");

app.listen(port, () => console.log(`Hey, I'm listening on port ${port}!`));
