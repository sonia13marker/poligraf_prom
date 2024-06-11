import styles from "./CustomSliderForNewsPage.module.scss";
import ButtonLeftSliderBorder from "../../icons/ButtonLeftSliderBorder";
import ButtonRightSliderBorder from "../../icons/ButtonRightSliderBorder";
import { useState } from "react";
import ResizeComponent from "../ResizeComponent/ResizeComponent";
import SmallButtonLeftSliderBorder from "../../icons/SmallButtonLeftSliderBorder";
import SmallButtonRightSliderBorder from "../../icons/SmallButtonRightSliderBorder";

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
      {images.length > 1 && (
        <span className={styles.slider__buttons}>
          <ResizeComponent
            defaultComponent={
              <ButtonLeftSliderBorder
                type="news"
                onClickAction={prevSlide}
                color={currentIndex === 0 ? "#D5D6D7" : "#01A3D4"}
              />
            }
            resizedComponent={
              <SmallButtonLeftSliderBorder
                onClickAction={prevSlide}
                color={currentIndex === 0 ? "#D5D6D7" : "#01A3D4"}
              />
            }
            resizeValue="485"
          />

          <ResizeComponent
            defaultComponent={
              <ButtonRightSliderBorder
                type="news"
                onClickAction={nextSlide}
                color={
                  currentIndex === images.length - 1 ? "#D5D6D7" : "#01A3D4"
                }
              />
            }
            resizedComponent={
              <SmallButtonRightSliderBorder
                onClickAction={nextSlide}
                color={
                  currentIndex === images.length - 1 ? "#D5D6D7" : "#01A3D4"
                }
              />
            }
            resizeValue="485"
          />
        </span>
      )}
      <span className={styles.slider__images}>
        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={`news ${currentIndex}`}
            className={styles.slider__images__oneImage}
          />
        )}
      </span>
    </span>
  );
}
