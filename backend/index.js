const express = __non_webpack_require__("express");
var monitor = require("express-status-monitor");
import registerRoutes from "./register.js";

var app = express();
app.use(monitor());
app.use(express.static("dist/public"));
registerRoutes(app);

app.listen(5001, function () {
  console.log("App running on port", 5001);
});
