import style from "./PartnerCard.module.scss";

export default function PartnerCard({ image, link, description }) {
  return (
    <div className={style.wrapper}>
      <span className={style.wrapper__header}>
        <img
          src={image}
          alt="partner logo"
          className={style.wrapper__header__image}
        />

        <a
          href={link}
          className={style.wrapper__header__link}
          rel="noreferrer"
          target="_blank"
        >
          Перейти на сайт
        </a>
      </span>
      <p className={style.wrapper__description}>{description}</p>
    </div>
  );
}
