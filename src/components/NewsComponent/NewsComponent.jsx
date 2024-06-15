import style from "./NewsComponent.module.scss";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

export default function NewsComponent({ news }) {
  const [isSliced, setIsSliced] = useState(6);

  const showMore = (num) => {
    setIsSliced(isSliced + num);
  };
  return (
    <span className={style.wrapper}>
      <span className={style.wrapper__list}>
        {news.news.slice(0, isSliced).map((oneNew, i) => (
          <NewsCard
            id={oneNew.id}
            desc={oneNew.desc}
            title={oneNew.title}
            tag={oneNew.tag}
            images={oneNew.images}
            key={i}
          />
        ))}
      </span>
      {news.news.length > 6 ? (
        <button
          className={style.wrapper__button}
          onClick={() => showMore(3)}
          style={{
            display: isSliced >= news.news.length ? "none" : "block",
          }}
        >
          Показать еще
        </button>
      ) : (
        <></>
      )}
    </span>
  );
}
