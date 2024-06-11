import style from "./GoBackButton.module.scss";
import LeftArrow from "../../icons/LeftArrow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResizeComponent from "../ResizeComponent/ResizeComponent";
import SmallLeftArrow from "../../icons/SmallLeftArrow";

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
        <ResizeComponent
          defaultComponent={<LeftArrow type="news" hover={isHover} />}
          resizedComponent={<SmallLeftArrow type="news" hover={isHover} />}
          resizeValue="485"
        />
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
        <ResizeComponent
          defaultComponent={<LeftArrow type="providers" hover={isHover} />}
          resizedComponent={<SmallLeftArrow type="providers" hover={isHover} />}
          resizeValue="485"
        />
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
        <ResizeComponent
          defaultComponent={<LeftArrow type="main page" hover={isHover} />}
          resizedComponent={<SmallLeftArrow type="main page" hover={isHover} />}
          resizeValue="485"
        />
        Назад
      </button>
    );
  }
}
