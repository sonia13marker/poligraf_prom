import style from "../HeaderForPages/HeaderForPages.module.scss";
import DownloadIcon from "../../icons/DownloadIcon";
import { useState } from "react";

export default function ButtonsForHeader({ siteLink, documentLink, colorScheme }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseDown = () => {
    setIsHover(false);
  };
  const publicPath = process.env.PUBLIC_URL;
  console.log("DC", documentLink)
  if (siteLink && documentLink) {
    return (
      <span className={style.header__wrapper__btns}>
        <a
          href={`${publicPath}${siteLink}`}
          rel="noreferrer"
          target="_blank"
          className={style.header__wrapper__btns__siteLink}
        >
          Перейти на сайт
        </a>
        <a
          href={`${publicPath}/${documentLink}`}
          rel="noreferrer"
          target="_blank"
          className={style.header__wrapper__btns__docLink}
           onMouseEnter={handleMouseOn}
            onMouseLeave={handleMouseDown}
        >
          <span
            className={style.header__wrapper__btns__docLink__wrapper}
          >
            Цветовая карта
            <DownloadIcon hover={isHover} colorScheme={colorScheme}/>
          </span>
        </a>
      </span>
    );
  } else if (siteLink ?? documentLink === null) {
    return (
      <span className={style.header__wrapper__btns}>
        <a
          href={`${publicPath}${siteLink}`}
          rel="noreferrer"
          target="_blank"
          className={style.header__wrapper__btns__siteLink}
        >
          Перейти на сайт
        </a>
      </span>
    );
  } else if (documentLink ?? siteLink === null) {
    return (
      <span className={style.header__wrapper__btns}>
        <a
          href={`${publicPath}/${documentLink}`}
          rel="noreferrer"
          target="_blank"
          className={`${style.header__wrapper__btns__docLink} ${colorScheme!==null && colorScheme==="blue" ? style.blue : ""}`}
           onMouseEnter={handleMouseOn}
            onMouseLeave={handleMouseDown}
        >
          <span
            className={style.header__wrapper__btns__docLink__wrapper}
          >
            Цветовая карта
            <DownloadIcon hover={isHover} colorScheme={colorScheme}/>
          </span>
        </a>
      </span>
    );
  } else if (siteLink === null && documentLink === null) {
    return null;
  }
}
