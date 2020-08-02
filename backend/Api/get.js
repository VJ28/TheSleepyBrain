var router = require("express").Router();
var blogRepo = require("../Repository/queryRepository/blog");

router.get("/get/:title/", async function () {
  return await blogRepo.get(req, res);
});

router.get("/getAll/", async function () {
  return await blogRepo.getAll(req, res);
});

module.exports = router;
