import styles from "./HeaderMainBlock.module.scss";
import HeaderButtonsComponent from "../HeaderButtonsComponent/HeaderButtonsComponent";
import { useState } from "react";
import pic1 from "../../images/main_block_1.png";
import pic2 from "../../images/main_block_2.png";
import pic3 from "../../images/main_block_3.png";

export default function HeaderMainBlock() {
  const [activeImage, setActiveImage] = useState(`${pic1}`); // Картинка по умолчанию
  const links = [
    { 
      linkTo: "/catalog", 
      title: "Всё для графической печати", 
      type: "scroll",
      image: `${pic1}` // Картинка для первой кнопки
    },
    { 
      linkTo: "/catalog", 
      title: "Всё для текстильной печати",
      image: `${pic2}` // Картинка для второй кнопки
    },
    { 
      linkTo: "/catalog", 
      title: "Всё для ТПФ",
      image: `${pic3}` // Картинка для третьей кнопки
    },
  ];

  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerWrapper__title}>
        Решения для вашего шёлкотрафаретного бизнеса
      </h1>
      <div className={styles.headerWrapper__buttons}>
        <HeaderButtonsComponent 
          links={links} 
          onHover={(image) => setActiveImage(image)}
          onLeave={() => setActiveImage(links[0].image)} // Возвращаем первую картинку при уходе
        />
      </div>
      <div 
        className={styles.headerWrapper__imageBlock}
        style={{ backgroundImage: `url(${activeImage})` }}
      >
      </div>
    </div>
  );
}