const express = __non_webpack_require__("express");
var router = express.Router();
import blogRepo from "../Repository/queryRepository/blog.js";

router.get("/get/:title/", async function () {
  return await blogRepo.get(req, res);
});

router.get("/getAll/", async function () {
  return await blogRepo.getAll(req, res);
});

export default router;
