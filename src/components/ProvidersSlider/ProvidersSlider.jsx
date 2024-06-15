import styles from "./ProvidersSlider.module.scss";
import { Link } from "react-router-dom";
import ButtonRightSliderBorder from "../../icons/ButtonRightSliderBorder";
import ButtonLeftSliderBorder from "../../icons/ButtonLeftSliderBorder";
import providers from "../../data/providers.json";
import { useEffect, useState } from "react";
import ProvidersSliderCard from "../ProvidersSliderCard/ProvidersSliderCard";

export default function ProvidersSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex(currentImageIndex + 2);
  };

  const prevSlide = () => {
    setCurrentImageIndex(currentImageIndex - 2);
  };

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
    if (isResized >= 1350) return 4;
    if (isResized >= 1085) return 3;
    return 2;
  };
  const visibleCardsCount = getVisibleCardsCount();

  // if (isResized >= 1350) {
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
              currentImageIndex + visibleCardsCount >=
              providers.providers.length
                ? "#D5D6D7"
                : "#007CBC"
            }
          />
        </span>
      </span>

      <div className={styles.wrapper__slider}>
        {providers.providers
          .slice(currentImageIndex, currentImageIndex + visibleCardsCount)
          .map((provider, i) => (
            <ProvidersSliderCard
              key={i}
              name={provider.name}
              image={provider.image}
              id={provider.id}
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
