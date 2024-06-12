import style from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
import image_404 from "../../images/image_404.png";

export default function NotFoundPage() {
  return (
    <span className={style.wrapper}>
      <span className={style.wrapper__text}>
        <h3 className={style.wrapper__text__title}>Ошибка</h3>
        <img
          src={image_404}
          alt="404 page"
          className={style.wrapper__text__img}
        />
        <p className={style.wrapper__text__p}>
          Что-то пошло не так. Предлагаем Вам вернуться на главную или
          перезагрузить страницу.
        </p>
      </span>
      <Link to={"/"} className={style.wrapper__button}>
        Вернуться на главную
      </Link>
    </span>
  );
}
