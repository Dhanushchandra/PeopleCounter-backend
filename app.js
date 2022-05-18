const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.post("/api/count", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(4000);
