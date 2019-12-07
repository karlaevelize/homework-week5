const express = require("express");
const port = 4000;
const db = require("./sequelize-rest");
const bodyParser = require("body-parser");
const router = require("./movies/router");

const app = express();

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(router);

app.listen(port, () => console.log(`Hey, I'm listening on port ${port}!`));
