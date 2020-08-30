import React, { useEffect } from "react";
import { ArticleCard } from "../Components/ArticleCard";
import getCSSClasses from "../../styles";
import { Context } from "../../utils/context";

const titleClasses = getCSSClasses("color_white", "mb8");
const seoTextClasses = getCSSClasses("font12", "color_white", "mb12");

const BlogListing = function () {
  const { listing, updateContext } = React.useContext(Context);
  useEffect(() => {
    if (!listing) {
      fetch(`/getAll/`)
        .then((res) => res.json())
        .then((x) => {
          updateContext({ ...x });
        });
    }
  }, [listing]);
  return (
    <section>
      <h1 className={titleClasses}>Programming Blogs</h1>
      <p className={seoTextClasses}>
        List of useful blogs on programming tips and tricks
      </p>
      <ul>{listing ? listing.map((x) => <ArticleCard {...x} />) : null}</ul>
    </section>
  );
};

export default BlogListing;
