import blogRepo from "../Repository/queryRepository/blog.js";
import Render from "../renderer.js";
const express = __non_webpack_require__("express");
var router = express.Router();

router.get("/", async function (req, res) {
  var data = await blogRepo.getAll(req, res);
  Render(req, res, data);
});

router.get("/blog/:title", async function (req, res) {
  var data = await blogRepo.get(req, res);
  Render(req, res, data);
});

router.get("/videos", async function (req, res) {
  //var data = await blogRepo.getAll(req, res);
  Render(req, res, {});
});

export default router;
