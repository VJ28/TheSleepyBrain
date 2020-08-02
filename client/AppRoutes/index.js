import React from "react";
import { Switch } from "react-router-dom";
import { VideoListingRoute } from "../VideoListing/Route";
import { VideoDetailsRoute } from "../VideoDetails/Route";
import { BlogDetailsRoute } from "../BlogDetails/Route";
import { BlogListingRoute } from "../BlogListing/Route";

const AppRoutes = () => {
  return (
    <Switch>
      {VideoListingRoute}
      {BlogDetailsRoute}
      {VideoDetailsRoute}
      {BlogListingRoute}
    </Switch>
  );
};

export default AppRoutes;
