const express = require("express");
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const router = require("./movies/router");

const app = express();

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(router);

app.listen(port, () => console.log(`Hey, I'm listening on port ${port}!`));
