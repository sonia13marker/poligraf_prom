import style from "./TechnologieFileCard.module.scss";
import FileIconPDF from "../../icons/FileIconPDF";
import FileIconIMG from "../../icons/FileIconIMG";
import { useState } from "react";

export default function TechnologieFileCard({ file, fileName }) {
  // console.log(file);
  const publicPath = process.env.PUBLIC_URL;
  const fileExtension = file?.slice(-3);
  // console.log(fileExtension);
  const [isHover, setIsHover] = useState(false);
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseDown = () => {
    setActive(true);
  };

  const handleMouseUp = () => {
    setActive(false);
  };

  if (fileExtension === "pdf" || "doc") {
    return (
      <a
        href={`${publicPath}/${file}`}
        target="_blank"
        rel="noreferrer"
        className={style.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <FileIconPDF hover={isHover} active={active} />
        <h3 className={style.card__title}>{fileName}</h3>
      </a>
    );
  } else if (fileExtension === "png" || "jpg" || "jpeg") {
    return (
      <a
        href={`${publicPath}/${file}`}
        target="_blank"
        rel="noreferrer"
        className={style.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <FileIconIMG hover={isHover} active={active} />
        <h3 className={style.card__title}>{fileName}</h3>
      </a>
    );
  }
}
