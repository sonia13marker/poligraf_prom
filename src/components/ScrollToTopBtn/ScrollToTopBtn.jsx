import React from "react";
import style from "./ScrollToTopBtn.module.scss";
import ScrollArrow from "../../icons/ScrollArrow";
import ResizeComponent from "../ResizeComponent/ResizeComponent";
import SmallScrollArrow from "../../icons/SmallScrollArrow";

export default function ScrollToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={style.button} onClick={scrollToTop}>
      <ResizeComponent
        defaultComponent={<ScrollArrow />}
        resizedComponent={<SmallScrollArrow />}
        resizeValue={705}
      />
    </button>
  );
}
