import React from "react";
import style from "./Tag.module.scss";

const Tag = ({ name, page, onClick, isActive }) => {
  const handleClick = () => {
    onClick(name); // Вызываем функцию, переданную из TagsComponent
  };

  // Определяем классы в зависимости от страницы и активности
  const tagClass = `${style.wrapper} ${
    page === "providers" ? style.pink : style.yellow
  } ${isActive ? style.active : ""}`;

  return (
    <span className={tagClass} onClick={handleClick}>
      {name}
    </span>
  );
};

export default Tag;