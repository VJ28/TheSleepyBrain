import React from "react";
import getCSSClasses from "../styles";
import stylemug from "stylemug";
import { Link } from "react-router-dom";
const getClasses = stylemug.create({
  hamburgerBar: {
    width: "35px",
    height: "8px",
    marginTop: "4px",
    transition: "transform 1s",
  },
  firstBar: {
    marginTop: 0,
  },
  hamburger: {
    height: "35px",
    top: "8px",
    left: "16px",
  },
  animateHamburger: {
    "& > div:first-child": {
      transform: "rotate(45deg)",
      transformOrigin: "0px 8px",
    },
    "& > div:nth-child(2)": {
      transform: "translateX(35px)",
    },
    "& > div:last-child": {
      transform: "rotate(-45deg)",
      transformOrigin: "4px 2px",
    },
  },
  collapsibleNav: {
    width: "100%",
    height: "100%",
    opacity: "0",
    position: "absolute",
    top: 0,
    clipPath: "circle(0% at top left)",
    transition: "opacity 1s, clip-path 1s",
    paddingTop: "48px",
    "&>a": {
      display: "flex",
      flexDirection: "column",
      height: "100px",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "32px",
      color: "white",
    },
    "&>a:hover": {
      backgroundColor: "#C0F5F9",
      color: "#1A1A1D",
    },
  },
  expandNav: {
    opacity: "1",
    zIndex: "1",
    clipPath: "circle(100% at center)",
  },
});

const brandNameClasses = getCSSClasses(
  "font20",
  "mt12",
  "color_white",
  "text_align_center"
);
const brandContainerClasses = getCSSClasses(
  "position_relative",
  "height48",
  "bg_russianBlack",
  "box_shadow"
);
const hamburgerClasses = `${getClasses("hamburger")} ${getCSSClasses(
  "position_absolute",
  "zIndex_10",
  "overflow_hidden"
)}`;
const barClasses = `${getClasses("hamburgerBar")} ${getCSSClasses(
  "bg_onahau"
)}`;

const firstBar = getClasses("firstBar");

const collapsibleNavClasses = `${getClasses("collapsibleNav")} ${getCSSClasses(
  "bg_russianBlack"
)}`;
const expandNavClasses = `${getClasses("expandNav")} ${getCSSClasses(
  "bg_russianBlack"
)}`;
const animateHamburgerClasses = getClasses("animateHamburger");
const HamBurgerBars = () => (
  <>
    <div className={`${barClasses} ${firstBar}`}></div>
    <div className={barClasses}></div>
    <div className={barClasses}></div>
  </>
);
const Header = () => {
  let [expandNav, setExpandNav] = React.useState(false);
  const handleNavClick = () => {
    setExpandNav(!expandNav);
  };
  return (
    <>
      <div className={brandContainerClasses}>
        <h2 className={brandNameClasses}>
          <Link to="/">The Sleepy Brain</Link>
        </h2>
      </div>
      <div
        onClick={handleNavClick}
        className={`${hamburgerClasses} ${
          expandNav ? animateHamburgerClasses : ""
        }`}
      >
        <HamBurgerBars />
      </div>
      <div
        className={`${collapsibleNavClasses} ${
          expandNav ? expandNavClasses : ""
        }`}
      >
        <Link to="/" onClick={handleNavClick}>
          Home
        </Link>
        <Link to="/videos" onClick={handleNavClick}>
          Videos
        </Link>
        <a href="#" onClick={handleNavClick}>
          Live Sessions
        </a>
        <a href="#" onClick={handleNavClick}>
          About me
        </a>
      </div>
    </>
  );
};

export default Header;
