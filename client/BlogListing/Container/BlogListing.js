import React from "react";
import { Link } from "react-router-dom";

const BlogListing = function () {
  return (
    <h1>
      Blog Listing Page <Link to="/videos"> videos</Link>
    </h1>
  );
};

export default BlogListing;
