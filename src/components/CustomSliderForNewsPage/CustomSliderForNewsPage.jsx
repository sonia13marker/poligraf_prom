import styles from "./CustomSliderForNewsPage.module.scss";
import ButtonLeftSliderBorder from "../../icons/ButtonLeftSliderBorder";
import ButtonRightSliderBorder from "../../icons/ButtonRightSliderBorder";
import { useState } from "react";

export default function CustomSliderForNewsPage({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <span className={styles.slider}>
      {images.length >= 1 && images.length !== 1 ? (
        <span className={styles.slider__buttons}>
          <ButtonLeftSliderBorder
            type="news"
            onClickAction={prevSlide}
            color={currentIndex === 0 ? "#D5D6D7" : "#01A3D4"}
          ></ButtonLeftSliderBorder>
          <ButtonRightSliderBorder
            type="news"
            onClickAction={nextSlide}
            color={currentIndex === images.length - 1 ? "#D5D6D7" : "#01A3D4"}
          ></ButtonRightSliderBorder>
        </span>
      ) : (
        <></>
      )}
      <span className={styles.slider__images}>
        {images.length !== 0 ? (
          images.length >= 1 ? (
            images.map((image, i) => (
              <img
                src={images[currentIndex]}
                alt={`news ${image}`}
                key={i}
                className={styles.slider__images__oneImage}
              />
            ))
          ) : (
            <img
              src={images}
              alt={`news ${images}`}
              className={styles.slider__images__oneImage}
            />
          )
        ) : (
          <></>
        )}
      </span>
    </span>
  );
}
