const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

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
