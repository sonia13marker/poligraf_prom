import style from "./SmallNewsComponent.module.scss";
import { Link } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import news from "../../data/news.json";

export default function SmallNewsComponent() {
  // const [isResized, setIsResized] = useState(window.innerWidth);
  //
  // const handleResize = () => {
  //   setIsResized(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const getVisibleCardsCount = () => {
    return 4;
  };
  const visibleCardsCount = getVisibleCardsCount();
  console.log("news", news);
  return (
    <span className={style.wrapper}>
      <span className={style.wrapperTwo}>
        <h2 className={style.wrapperTwo__title}>Новости </h2>

        <span className={style.wrapperTwo__elements}>
          {news.news.slice(visibleCardsCount).map((oneNew, i) => (
            <NewsCard
              id={oneNew.id}
              key={i}
              tag={oneNew.tag}
              title={oneNew.title}
              desc={oneNew.desc}
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
