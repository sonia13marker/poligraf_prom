import style from "./SmallTag.module.scss";

export default function SmallTag({ name }) {
  return <span className={style.wrapper}>{name}</span>;
}
