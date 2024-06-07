import style from "../HeaderForPages/HeaderForPages.module.scss";
import DownloadIcon from "../../icons/DownloadIcon";
import { useState } from "react";

export default function ButtonsForHeader({ siteLink, documentLink }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseDown = () => {
    setIsHover(false);
  };
  if (siteLink && documentLink) {
    return (
      <span className={style.header__wrapper__btns}>
        <a
          href={siteLink}
          rel="noreferrer"
          target="_blank"
          className={style.header__wrapper__btns__siteLink}
        >
          Перейти на сайт
        </a>
        <a
          href={documentLink}
          rel="noreferrer"
          target="_blank"
          className={style.header__wrapper__btns__docLink}
        >
          <span
            className={style.header__wrapper__btns__docLink__wrapper}
            onMouseEnter={handleMouseOn}
            onMouseLeave={handleMouseDown}
          >
            Цветовая карта
            <DownloadIcon hover={isHover} />
          </span>
        </a>
      </span>
    );
  } else if (siteLink && documentLink === undefined) {
    return (
      <span className={style.header__wrapper__btns}>
        <a
          href={siteLink}
          rel="noreferrer"
          target="_blank"
          className={style.header__wrapper__btns__siteLink}
        >
          Перейти на сайт
        </a>
      </span>
    );
  } else if (documentLink && siteLink === undefined) {
    return (
      <span className={style.header__wrapper__btns}>
        <a
          href={documentLink}
          rel="noreferrer"
          target="_blank"
          className={style.header__wrapper__btns__docLink}
        >
          <span
            className={style.header__wrapper__btns__docLink__wrapper}
            onMouseEnter={handleMouseOn}
            onMouseLeave={handleMouseDown}
          >
            Цветовая карта
            <DownloadIcon hover={isHover} />
          </span>
        </a>
      </span>
    );
  } else if (siteLink === undefined && documentLink === undefined) {
    return null;
  }
}
