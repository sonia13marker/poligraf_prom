import style from "./GoBackButton.module.scss";
import LeftArrow from "../../icons/LeftArrow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GoBackButton({ type }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseDown = () => {
    setIsHover(false);
  };

  const navigate = useNavigate();

  if (type === "news") {
    return (
      <button
        onClick={() => navigate(-1)}
        className={`${style.wrapper} ${style.lightblue}`}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseDown}
      >
        <LeftArrow type="news" hover={isHover} />
        Назад
      </button>
    );
  } else if (type === "providers") {
    return (
      <button
        onClick={() => navigate(-1)}
        className={`${style.wrapper} ${style.pink}`}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseDown}
      >
        <LeftArrow type="providers" hover={isHover} />
        Назад
      </button>
    );
  } else if (type === "main page") {
    return (
      <button
        onClick={() => navigate(-1)}
        className={`${style.wrapper} ${style.blue}`}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseDown}
      >
        <LeftArrow type="main page" hover={isHover} />
        Назад
      </button>
    );
  }
}
