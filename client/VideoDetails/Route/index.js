import loadable from "@loadable/component";
import React from "react";
import { Route } from "react-router-dom";
import VideoDetails from "../Container/VideoDetails";

// const VideoDetails = loadable(() =>
//   import(/* webpackChunkName: "video-details" */ "../Container/VideoDetails")
// );

export const VideoDetailsRoute = (
  <Route path="/videos/:title/" component={VideoDetails} key="videodetails" />
);
