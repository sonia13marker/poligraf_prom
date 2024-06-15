import styles from "./ContactsSlider.module.scss";
import ButtonLeftSliderBorder from "../../icons/ButtonLeftSliderBorder";
import ButtonRightSliderBorder from "../../icons/ButtonRightSliderBorder";
import img1 from "../../images/contacts slider 1.png";
import img2 from "../../images/contacts slider 2.png";
import img3 from "../../images/contacts_slider_3.jpg";
import { useEffect, useState } from "react";
import SmallButtonLeftSliderBorder from "../../icons/SmallButtonLeftSliderBorder";
import SmallButtonRightSliderBorder from "../../icons/SmallButtonRightSliderBorder";

export default function ContactsSlider() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <span className={styles.slider}>
      <span className={styles.slider__header}>
        <h3 className={styles.slider__header__title}>Как к нам проехать?</h3>
        <span className={styles.slider__header__buttons}>
          {windowWidth <= 485 ? (
            <>
              <SmallButtonLeftSliderBorder
                onClickAction={prevSlide}
                color={currentIndex === 0 ? "#D5D6D7" : "#2E379E"}
              />
              <SmallButtonRightSliderBorder
                onClickAction={nextSlide}
                color={currentIndex === 2 ? "#D5D6D7" : "#2E379E"}
              />
            </>
          ) : (
            <>
              <ButtonLeftSliderBorder
                type="contacts"
                onClickAction={prevSlide}
                color={currentIndex === 0 ? "#D5D6D7" : "#2E379E"}
              />
              <ButtonRightSliderBorder
                type="contacts"
                onClickAction={nextSlide}
                color={currentIndex === 2 ? "#D5D6D7" : "#2E379E"}
              />
            </>
          )}
        </span>
      </span>
      <span className={styles.slider__body}>
        <img
          src={images[currentIndex]}
          alt={`slider ${currentIndex}`}
          className={styles.slider__body__img}
        />
        <span className={styles.slider__body__text}>
          {currentIndex === 0 ? (
            <p className={styles.slider__body__text__p}>
              Со стороны трамвайных путей повернуть направо на втором повороте
            </p>
          ) : currentIndex === 1 ? (
            <p className={styles.slider__body__text__p}>
              Проехать через шлагбаум, после магазина “Alik Xpress” ехать прямо
            </p>
          ) : (
            <p className={styles.slider__body__text__p}>
              Доехать до упора, последняя левая дверь наша. Вы доехали!
            </p>
          )}
        </span>
      </span>
    </span>
  );
}
