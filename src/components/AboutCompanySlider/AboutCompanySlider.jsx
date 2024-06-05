import styles from "./AboutCompanySlider.module.scss";
import pic1 from "../../images/slider-pic-1.png";
import pic2 from "../../images/slider-pic-2.png";
import { useState } from "react";
import ButtonLeftSliderNoBorders from "../../icons/ButtonLeftSliderNoBorders";
import ButtonRightSliderNoBorder from "../../icons/ButtonRightSliderNoBorder";

export default function AboutCompanySlider() {
  const images = [pic1, pic2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length,
    );
  };
  return (
    <span className={styles.slider__wrapper}>
      <span className={styles.slider__wrapper__imgBlock}>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </span>
      <span className={styles.slider__wrapper__textBlock}>
        <span className={styles.slider__wrapper__textBlock__wrapperBtns}>
          <ButtonLeftSliderNoBorders
            onClickAction={nextSlide}
            color={currentImageIndex === 0 ? "#D5D6D7" : "#007CBC"}
          />
          <ButtonRightSliderNoBorder
            onClickAction={prevSlide}
            color={currentImageIndex === 1 ? "#D5D6D7" : "#007CBC"}
          />
        </span>
        {currentImageIndex === 0 ? (
          <h3 className={styles.slider__wrapper__textBlock__text}>
            Занимаемся <br /> натяжкой трафаретных <br /> сеток на рамы
          </h3>
        ) : (
          <h3 className={styles.slider__wrapper__textBlock__text}>
            Занимаемся <br /> смешиванием красок по Pantone
          </h3>
        )}

        <span className={styles.slider__wrapper__textBlock__buttons}></span>
      </span>
    </span>
  );
}
