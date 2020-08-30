const express = __non_webpack_require__("express");
var router = express.Router();
import blogRepo from "../Repository/queryRepository/blog.js";

router.get("/get/:title/", async function (req, res) {
  const result = await blogRepo.get(req, res);
  res.json(result).end(200);
});

router.get("/getAll/", async function (req, res) {
  const result = await blogRepo.getAll(req, res);
  res.json(result).end(200);
});

export default router;
