import { Link } from "react-router-dom";
import style from "./HeaderButtonsComponent.module.scss";

export default function HeaderButtonsComponent({ links, onHover, onLeave }) {
  return (
    <>
      {links.map((link, i) => (
        <span key={i}>
          <Link
            to={link.linkTo}
            className={
              i === 0
                ? `${style.headerButtons}`
                : style.headerButtons
            }
            onMouseEnter={() => onHover(link.image)}
            onMouseLeave={onLeave}
          >
            {link.title}
          </Link>
        </span>
      ))}
    </>
  );
}