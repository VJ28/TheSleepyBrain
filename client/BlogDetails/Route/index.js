import loadable from "@loadable/component";
import React from "react";
import { Route } from "react-router-dom";
import BlogDetails from "../Container/BlogDetails";

// const BlogDetails = loadable(() =>
//   import(/* webpackChunkName: "blog-details" */ "../Container/BlogDetails")
// );

export const BlogDetailsRoute = (
  <Route path="/blogs/:title/" component={BlogDetails} key="blogdetails" />
);
