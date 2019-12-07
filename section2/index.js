const express = require("express");
const port = 4000;
const app = express();
const router = require("./movies/router");
const bodyParser = require("body-parser");

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.listen(router);
app.listen(port, () => console.log(`Hey, I'm listening on port ${port}!`));
