import style from "./FooterListComponent.module.scss";
import { NavLink } from "react-router-dom";

export default function FooterListComponent({ links, customStyle, onClick }) {
  return (
    <nav className={style.list} style={customStyle}>
      {links.map((link, index) => (
        <NavLink
          onClick={onClick}
          key={index}
          to={link.to}
          className={`${style.list__component} ${style[link.colorClass]}`}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
