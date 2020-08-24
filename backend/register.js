import getApis from "./Api/get.js";
import blogController from "./Controller/blog.js";

function registerRoutes(app) {
  //register controllers
  app.use(blogController);

  //register apis
  app.use(getApis);
}

export default registerRoutes;
