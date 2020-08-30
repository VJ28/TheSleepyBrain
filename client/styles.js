import stylemug from "stylemug";
const getCSSClass = stylemug.create({
  /* background colors */
  bg_lightBlue: {
    backgroundColor: "#56CCF2",
  },
  bg_russianBlack: {
    backgroundColor: "#1A1A1D",
  },
  bg_onahau: {
    backgroundColor: "#C0F5F9",
  },
  bg_gray: {
    backgroundColor: "#4F4F4F",
  },
  /* colors */
  color_white: {
    color: "#FFFFFF",
  },
  color_onahau: {
    color: "#C0F5F9",
  },
  /* overflow */
  overflow_hidden: {
    overflow: "hidden",
  },
  /* margin */
  mt8: {
    marginTop: "8px",
  },
  mt12: {
    marginTop: "12px",
  },
  mt16: {
    marginTop: "16px",
  },
  mb8: {
    marginBottom: "8px",
  },
  mb12: {
    marginBottom: "12px",
  },
  margin_auto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  /* padding */
  p12: {
    padding: "12px",
  },
  p20: {
    padding: "20px",
  },
  pl16: {
    paddingLeft: "16px",
  },
  pr16: {
    paddingRight: "16px",
  },
  /* font sizes */
  font12: {
    fontSize: "12px",
  },
  font20: {
    fontSize: "20px",
  },

  /* display */
  display_flex: {
    display: "flex",
  },
  justify_content_center: {
    justifyContent: "center",
  },
  justify_content_space_between: {
    justifyContent: "space-between",
  },
  align_center: {
    alignItems: "center",
  },

  /* position */
  position_relative: {
    position: "relative",
  },
  position_absolute: {
    position: "absolute",
  },
  /* zindex */
  zIndex_1: {
    zIndex: 1,
  },
  zIndex_10: {
    zIndex: 10,
  },
  /* shadow */
  box_shadow: {
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  },

  /* border radius */
  borderRadius3: {
    borderRadius: "3px",
  },
  /* text align */
  text_align_center: {
    textAlign: "center",
  },
  /* height */
  height48: {
    height: "48px",
  },
  articleCardHeight: {
    height: "135px",
  },
});

export default getCSSClass;
