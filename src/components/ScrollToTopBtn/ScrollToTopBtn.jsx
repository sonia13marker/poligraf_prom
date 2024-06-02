import React, { useState } from "react";
import style from "./ScrollToTopBtn.module.scss";
import ScrollArrow from "../ScrollArrow";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={style.button}
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <ScrollArrow />
    </button>
  );
}
