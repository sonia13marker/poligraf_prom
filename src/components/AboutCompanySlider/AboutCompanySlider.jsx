import styles from "./AboutCompanySlider.module.scss";
// import pic1 from "../../images/grids1.jpg";
import pic1 from "../../images/slider-pic-1.png";
import pic2 from "../../images/slider-pic-2.png";
import { useState } from "react";
import ButtonLeftSliderNoBorders from "../../icons/ButtonLeftSliderNoBorders";
import ButtonRightSliderNoBorder from "../../icons/ButtonRightSliderNoBorder";
import ResizeComponent from "../ResizeComponent/ResizeComponent";

export default function AboutCompanySlider() {
  const images = [pic1, pic2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const prevSlide = () => {
    setCurrentImageIndex(currentImageIndex - 1);
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
          {/*<ButtonLeftSliderNoBorders*/}
          {/*  onClickAction={prevSlide}*/}
          {/*  color={currentImageIndex === 0 ? "#D5D6D7" : "#007CBC"}*/}
          {/*/>*/}
          {/*<ButtonRightSliderNoBorder*/}
          {/*  onClickAction={nextSlide}*/}
          {/*  color={currentImageIndex === 1 ? "#D5D6D7" : "#007CBC"}*/}
          {/*/>*/}
          <ResizeComponent
            defaultComponent={
              <ButtonLeftSliderNoBorders
                onClickAction={prevSlide}
                color={currentImageIndex === 0 ? "#D5D6D7" : "#007CBC"}
              />
            }
            resizedComponent={
              <ButtonLeftSliderNoBorders
                type="mobile"
                onClickAction={prevSlide}
                color={currentImageIndex === 0 ? "#D5D6D7" : "#007CBC"}
              />
            }
            resizeValue="485"
          />
          <ResizeComponent
            defaultComponent={
              <ButtonRightSliderNoBorder
                onClickAction={nextSlide}
                color={currentImageIndex === 1 ? "#D5D6D7" : "#007CBC"}
              />
            }
            resizedComponent={
              <ButtonRightSliderNoBorder
                type="mobile"
                onClickAction={nextSlide}
                color={currentImageIndex === 1 ? "#D5D6D7" : "#007CBC"}
              />
            }
            resizeValue="485"
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
