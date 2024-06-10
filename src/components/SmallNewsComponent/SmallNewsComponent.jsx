import style from "./SmallNewsComponent.module.scss";
import { Link } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from "react";

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
    if (isResized <= 1095) return 1;
  };
  const visibleCardsCount = getVisibleCardsCount();

  const news = [
    {
      title: "Новинки от INKNOVATORS",
      tag: "new",
      image: {},
      desc: "Уважаемые клиенты! В нашем ассортименте появились пластизольные краски турецкого производства «INKNOVATORS». Характеристики этих красок, режимы работы с ними полностью схожи с требованиями к другим пластизолям, которыми торгует наша компания. В продаже имеются цветные кроющие краски, три вида белой краски для разных задач и материалов, прозрачные базы, триадный комплект, флуоресцентные краски шести цветов, металлики (золото и серебро) и концентрат, вспенивающий краску.",
    },
    {
      title: "Семинар 21-22 марта 2017",
      tag: "event",
      image: {},
      desc: "21-22 марта 2017 г. компания «Полиграфпром», совместно с компаниями «Скринпром», «PRINTEX RUSSIA» и ИП Евтушенко, провела очередной практический семинар по технологии печати и регенерации ТПФ, адресованный технологам и печатникам предприятий, занимающихся производством текстильной продукции. На семинаре присутствовали более 60 представителей профильных предприятий и индивидуальных предпринимателей ЮФО.",
    },
    {
      title: "Семинар 21-22 марта 2017",
      tag: "",
      image: {},
      desc: "Уважаемые клиенты! Компания «Полиграфпром», совместно с компаниями «Скринпром», «PRINTEX RUSSIA» и И. П. Евтушенко, проводит практический семинар по технологии печати и регенерации печатных форм. Семинар будет проводиться 21 и 22 марта 2017 г. в Краснодаре, по адресу ул. Вишняковой, 2.",
    },
  ];
  return (
    <span className={style.wrapper}>
      <span className={style.wrapperTwo}>
        <h2 className={style.wrapperTwo__title}>Новости </h2>

        <span className={style.wrapperTwo__elements}>
          {news.slice(visibleCardsCount || undefined).map((oneNew, i) => (
            <NewsCard
              key={i}
              tag={oneNew.tag}
              title={oneNew.title}
              image={oneNew.image}
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
