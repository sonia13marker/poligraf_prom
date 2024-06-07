import { Link } from "react-router-dom";
import style from "./HeaderButtonsComponent.module.scss";

export default function HeaderButtonsComponent({ links }) {
  return (
    <>
      {links.map((link, i) => (
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
      ))}
    </>
  );
}
