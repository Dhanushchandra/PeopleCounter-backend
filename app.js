const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var inup = 0;
var indown = 0;
var result;

app.post("/api/post/count", (req, res) => {
  var { up, down } = req.body;

  if (req.body.up == undefined) {
    console.log("called UNDEFINED");
    inup = inup;
  }

  if (req.body.up) {
    console.log("called NUMBER");
    inup = inup + 1;
  }

  if (req.body.down == undefined) {
    console.log("called UNDEFINED");
    indown = 0;
  }

  if (req.body.down) {
    console.log("called NUMBER");
    indown = 1;
  }

  console.log("inup: " + inup);
  console.log("indown: " + indown);
  result = inup - indown;
  console.log("result: " + result);

  if (!result <= 0) {
    inup = result;
  }
  if (result <= 0) {
    inup = 0;
  }
  console.log("FINAL= " + inup);
  res.send("ok");
});

app.get("/api/count", (req, res) => {
  res.send(inup.toString());
});

app.listen(4000);
