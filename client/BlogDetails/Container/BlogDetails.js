import React, { useEffect, useContext } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";

const BlogDetails = function () {
  const { details = {}, updateContext } = useContext(Context);
  let { title } = useParams();
  useEffect(() => {
    if (details.url != title) {
      fetch(`/get/${title}/`)
        .then((res) => res.json())
        .then((x) => {
          updateContext({ ...x });
        });
    }
  }, [title, details]);
  return details ? <h1>{details.title}</h1> : "No Data found";
};

export default BlogDetails;
