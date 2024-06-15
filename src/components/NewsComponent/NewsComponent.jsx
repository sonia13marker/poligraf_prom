import style from "./NewsComponent.module.scss";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsComponent({ news }) {
  console.log(news);
  return (
    <span className={style.wrapper}>
      <span className={style.wrapper__list}>
        {news.news.map((oneNew, i) => (
          <NewsCard
            // id={oneNew.id}
            title={oneNew.title}
            tag={oneNew.tag}
            images={oneNew.images}
            key={i}
          />
        ))}
      </span>
      {/*{news.length > 6 ? (*/}
      {/*  <button className={style.wrapper__button}>Показать еще</button>*/}
      {/*) : (*/}
      {/*  <></>*/}
      {/*)}*/}
    </span>
  );
}
