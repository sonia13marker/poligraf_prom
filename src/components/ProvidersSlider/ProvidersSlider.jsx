import styles from "./ProvidersSlider.module.scss";
import { Link } from "react-router-dom";
import ButtonRightSliderBorder from "../../icons/ButtonRightSliderBorder";
import ButtonLeftSliderBorder from "../../icons/ButtonLeftSliderBorder";
import providers from "../../data/providers.json";
import { useState } from "react";
import ProvidersSliderCard from "../ProvidersSliderCard/ProvidersSliderCard";

export default function ProvidersSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 2) % providers.providers.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (currentImageIndex - 2 + providers.providers.length) %
        providers.providers.length,
    );
  };

  return (
    <span className={styles.wrapper}>
      <span className={styles.wrapper__header}>
        <h2 className={styles.wrapper__header__title}>Поставщики</h2>
        {/*место для кнопок переключения слайдера*/}
        <span className={styles.wrapper__header__buttons}>
          <ButtonLeftSliderBorder
            type="providers"
            onClickAction={nextSlide}
            color={currentImageIndex === 0 ? "#D5D6D7" : "#007CBC"}
          />
          <ButtonRightSliderBorder
            type="providers"
            onClickAction={prevSlide}
            color={currentImageIndex === 7 ? "#D5D6D7" : "#007CBC"}
          />
        </span>
      </span>

      <div className={styles.wrapper__slider}>
        {providers.providers
          .slice(currentImageIndex, currentImageIndex + 4)
          .map((provider, i) => (
            // console.log(provider),
            <ProvidersSliderCard
              key={i}
              name={provider.name}
              image={provider.image}
              type="slider"
            />
          ))}
      </div>

      <Link to={"/providers"} className={styles.wrapper__button}>
        Посмотреть еще
      </Link>
    </span>
  );
}
