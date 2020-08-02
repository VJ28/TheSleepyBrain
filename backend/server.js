var express = require("express");
var app = express();
var registerRoutes = require("./register");

registerRoutes(app);

app.listen(5001, function () {
  console.log("App running on port", 5001);
});
