import style from "./TechnologiesComponent.module.scss";
import technologies from "../../data/technologies.json";
import TechnologieCard from "../TechnologieCard/TechnologieCard";

export default function TechnologiesComponent() {
  console.log(technologies.technologies);
  return (
    <span className={style.wrapper}>
      <h2 className={style.wrapper__title}>Технологии</h2>

      <span className={style.wrapper__texhList}>
        {technologies.technologies.map((tech, i) => (
          <TechnologieCard key={i} title={tech.title} {...tech} />
        ))}
      </span>
    </span>
  );
}
