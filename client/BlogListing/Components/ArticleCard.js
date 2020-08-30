import React from "react";
import getCSSClasses from "../../styles";
import { Link } from "react-router-dom";

const cardContainerClasses = getCSSClasses(
  "articleCardHeight",
  "bg_russianBlack",
  "p12",
  "borderRadius3"
);

const cardTitleClasses = getCSSClasses("color_white", "font20", "mb12");

const timeContainerClasses = getCSSClasses(
  "display_flex",
  "justify_content_space_between"
);
const textClasses = getCSSClasses("color_onahau", "font12");
const minReadClasses = getCSSClasses("pr16");
const viewsClasses = getCSSClasses("mt16");
export const ArticleCard = ({ title, url, entrydate, views, readtime }) => {
  entrydate = entrydate.toString();
  return (
    <li className={cardContainerClasses}>
      <Link to={`/blog/${url}/`}>
        <h2 className={cardTitleClasses}>{title}</h2>
        <div className={timeContainerClasses}>
          <span className={textClasses}>{entrydate}</span>
          <span className={`${minReadClasses} ${textClasses}`}>
            {readtime} min read
          </span>
        </div>
        <div className={`${textClasses} ${viewsClasses}`}>Views: {views}</div>
      </Link>
    </li>
  );
};
