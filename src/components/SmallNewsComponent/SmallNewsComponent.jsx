import style from "./SmallNewsComponent.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import news from "../../data/news.json";
import NewsCard from "../NewsCard/NewsCard";

export default function SmallNewsComponent() {
  const [isResized, setIsResized] = useState(window.innerWidth);

  const handleResize = () => {
    setIsResized(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getVisibleCardsCount = () => {
    if (isResized >= 1095 || isResized <= 775) return 3;
    if (isResized <= 1095 && isResized >= 775) return 2;
  };
  const visibleCardsCount = getVisibleCardsCount();
  console.log("news", news);
  return (
    <span className={style.wrapper}>
      <span className={style.wrapperTwo}>
        <h2 className={style.wrapperTwo__title}>Новости </h2>

        <span className={style.wrapperTwo__elements}>
          {news.news.slice(0, visibleCardsCount).map((oneNew, i) => (
            <NewsCard
              id={oneNew.id}
              key={i}
              desc={oneNew.desc}
              tag={oneNew.tag}
              title={oneNew.title}
              images={oneNew.images}
            />
          ))}
        </span>
      </span>

      <Link to={"/news"} className={style.wrapper__button}>
        Посмотреть все
      </Link>
    </span>
  );
}
