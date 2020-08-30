const express = __non_webpack_require__("express");
import monitor from "express-status-monitor";
import registerRoutes from "./register.js";
import mysql from "mysql2/promise";

var app = express();
app.use(monitor());
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "thesleepybrain",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
app.use(async function (req, res, next) {
  req.connection = connection;
  next();
});

app.use(express.static("dist/public"));
registerRoutes(app);

app.listen(5001, function () {
  console.log("App running on port", 5001);
});
