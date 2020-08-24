import React from "react";
import { Route } from "react-router-dom";
//import BlogListing from "../Container/BlogListing";
import loadable from "@loadable/component";

const BlogListing = loadable(() =>
  import(/* webpackChunkName: "blog-listing" */ "../Container/BlogListing")
);

export const BlogListingRoute = (
  <Route exact path="/" component={BlogListing} key="bloglisting" />
);
