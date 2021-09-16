const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    status: "ok",
    message: "A new message from another commits",
  });
});

app.get("/custom", (req, res) => {
  res.status(418).send({
    message: "did it work???",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
