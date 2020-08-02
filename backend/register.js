var getApis = require("./Api/get");
var blogController = require("./Controller/blog").blogController;

module.exports = function (app) {
  //register controllers
  app.use(blogController);

  //register apis
  app.use(getApis);
};
