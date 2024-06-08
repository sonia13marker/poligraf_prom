import style from "./FooterListComponent.module.scss";
import { NavLink } from "react-router-dom";

export default function FooterListComponent({ links, customStyle }) {
  return (
    <nav className={style.list} style={customStyle}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={`${style.list__component} ${style[link.colorClass]}`}
        >
          {" "}
          {link.name}{" "}
        </NavLink>
      ))}
    </nav>
  );
}
