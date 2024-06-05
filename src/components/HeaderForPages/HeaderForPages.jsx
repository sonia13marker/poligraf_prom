import style from "./HeaderForPages.module.scss";
import SearchComponent from "../SearchComponent/SearchComponent";
import DownloadIcon from "../../icons/DownloadIcon";
import { useState } from "react";

export default function HeaderForPages({
  title,
  searchMock,
  hasButtons,
  siteLink,
  documentLink,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseDown = () => {
    setIsHover(false);
  };

  return (
    <span className={style.header}>
      {hasButtons === "Yes" ? (
        <span className={style.header__wrapper}>
          <h2 className={style.header__title}>{title}</h2>
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
              target="_blink"
              className={style.header__wrapper__btns__docLink}
            >
              <span
                className={style.header__wrapper__btns__docLink__wrapper}
                onMouseEnter={handleMouseOn}
                onMouseLeave={handleMouseDown}
              >
                {/*<p className={style.header__wrapper__btns__docLink__wrapper__p}>*/}
                {/*{" "}*/}
                Цветовая карта
                {/*</p>*/}
                <DownloadIcon hover={isHover} />
              </span>
            </a>
          </span>
        </span>
      ) : (
        <h2 className={style.header__title}>{title}</h2>
      )}
      <SearchComponent searchMock={searchMock} />
    </span>
  );
}
