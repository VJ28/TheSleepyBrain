const express = __non_webpack_require__("express");
import monitor from "express-status-monitor";
import registerRoutes from "./register.js";
import cluster from "cluster";
import { cpus } from "os";
import { connection } from "./config/db";

const numCPUs = cpus().length;

var app = express();

app.use(monitor());

app.get("*.js", function (req, res, next) {
  if (req.header("Accept-Encoding").includes("br")) {
    req.url = req.url + ".br";
    console.log(req.url);
    res.set("Content-Encoding", "br");
  } else {
    req.url = req.url + ".gz";
    res.set("Content-Encoding", "gzip");
  }
  res.set("Content-Type", "application/javascript; charset=UTF-8");
  next();
});
app.get("*.css", function (req, res, next) {
  if (req.header("Accept-Encoding").includes("br")) {
    req.url = req.url + ".br";
    console.log(req.url);
    res.set("Content-Encoding", "br");
  } else {
    req.url = req.url + ".gz";
    res.set("Content-Encoding", "gzip");
  }
  res.set("Content-Type", "text/css; charset=UTF-8");
  next();
});
app.use(async function (req, res, next) {
  if (!req.url.endsWith(".js") && !req.url.endsWith(".css")) {
    req.connection = connection;
  }
  next();
});

app.use(express.static("dist/public"));
registerRoutes(app);

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(5001, function () {
    console.log("App running on port", 5001);
  });
}
