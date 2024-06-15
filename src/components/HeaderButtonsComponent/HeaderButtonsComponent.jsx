import { Link } from "react-router-dom";
import style from "./HeaderButtonsComponent.module.scss";

export default function HeaderButtonsComponent({ links }) {
  const scrollToBlock = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };
  return (
    <>
      {links.map((link, i) =>
        link.type === "scroll" ? (
          <span key={i} onClick={() => scrollToBlock()}>
            <Link
              to={link.linkTo}
              className={
                i === 0
                  ? `${style.headerButtons} ${style.firstSelected}`
                  : style.headerButtons
              }
            >
              {link.title}
            </Link>
          </span>
        ) : (
          <span key={i}>
            <Link
              to={link.linkTo}
              className={
                i === 0
                  ? `${style.headerButtons} ${style.firstSelected}`
                  : style.headerButtons
              }
            >
              {link.title}
            </Link>
          </span>
        ),
      )}
    </>
  );
}
