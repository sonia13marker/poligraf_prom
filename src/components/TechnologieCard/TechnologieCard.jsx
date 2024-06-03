import style from "./TechnologieCard.module.scss";
import TechnologieArrow from "../TechnologieArrow";
import { Link } from "react-router-dom";

export default function TechnologieCard({ title, ...tech }) {
  return (
    <Link to={"/"} className={style.card}>
      <span className={style.card__line}>
        <h3 className={style.card__line__title}>{title}</h3>
        <TechnologieArrow />
      </span>
    </Link>
  );
}
