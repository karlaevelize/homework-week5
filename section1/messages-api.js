const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

let count = 0;
const limit = (request, response, next) => {
  if (count < 5) {
    count++;
    next();
  } else {
    return response.status(429).send({
      message: "Too many requests"
    });
  }
};

app.use(limit);
app.use(bodyParser.json());

app.post("/messages", (request, response) => {
  const text = request.body.text;

  if (!request.body.text || request.body.text === "") {
    response.status(400).send({
      message: "Bad request"
    });
  } else {
    console.log(request.body.text);
    response.json({
      message: "Message received loud and clear"
    });
  }
});

app.listen(port, () => console.log(`I'm listenin on port ${port}`));
