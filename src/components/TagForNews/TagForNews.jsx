import style from "./TagForNews.module.scss";

export default function TagForNews({ type }) {
  if (type === "new") {
    return <span className={`${style.tag} ${style.new}`}>Новинка</span>;
  } else if (type === "event") {
    return <span className={`${style.tag} ${style.event}`}>Мероприятие</span>;
  } else if (type === "exh") {
    return <span className={`${style.tag} ${style.exh}`}>Выставка</span>;
  }
}
