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
    if (currentImageIndex + 4 < providers.providers.length) {
      setCurrentImageIndex(currentImageIndex + 2);
    }
  };

  const prevSlide = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 2);
    }
  };

  return (
    <span className={styles.wrapper}>
      <span className={styles.wrapper__header}>
        <h2 className={styles.wrapper__header__title}>Поставщики</h2>
        <span className={styles.wrapper__header__buttons}>
          <ButtonLeftSliderBorder
            type="providers"
            onClickAction={prevSlide}
            color={currentImageIndex === 0 ? "#D5D6D7" : "#007CBC"}
          />
          <ButtonRightSliderBorder
            type="providers"
            onClickAction={nextSlide}
            color={
              currentImageIndex + 4 >= providers.providers.length
                ? "#D5D6D7"
                : "#007CBC"
            }
          />
        </span>
      </span>

      <div className={styles.wrapper__slider}>
        {providers.providers
          .slice(currentImageIndex, currentImageIndex + 4)
          .map((provider, i) => (
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
