import React from "react";
import { Route } from "react-router-dom";
//import BlogDetails from "../Container/BlogDetails";
import loadable from "@loadable/component";

const BlogDetails = loadable(() =>
  import(/* webpackChunkName: "blog-details" */ "../Container/BlogDetails")
);

export const BlogDetailsRoute = (
  <Route
    exact
    path="/blog/:title([a-zA-Z0-9-_]+)/"
    component={BlogDetails}
    key="blogdetails"
  />
);
