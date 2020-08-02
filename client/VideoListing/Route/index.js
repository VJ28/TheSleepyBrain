import loadable from "@loadable/component";
import { Route } from "react-router-dom";
import React from "react";
import VideoListing from "../Container/VideoListing";

// const VideoListing = loadable(() =>
//   import(/* webpackChunkName: "video-listing" */ "../Container/VideoListing")
// );

export const VideoListingRoute = [
  <Route path="/videos" key="videoslisting">
    <VideoListing />
  </Route>,
];
