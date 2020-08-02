var router = require("express").Router();
var blogRepo = require("../Repository/queryRepository/blog");

router.get("/blog/:title", async function (req, res) {
  var data = await blogRepo.get(req, res);
  return res.send(data).end();
});

router.get("/:pageNo", async function (req, res) {
  var data = await blogRepo.getAll(req, res);
  return res.send(data).end();
});

exports.blogController = router;
