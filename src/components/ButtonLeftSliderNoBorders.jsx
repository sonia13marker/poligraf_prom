import { useState } from "react";

export default function ButtonLeftSliderNoBorders({ color, onClickAction }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="39"
      height="36"
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClickAction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        pointerEvents: color === "#D5D6D7" ? "none" : "auto",
        cursor: color === "#D5D6D7" ? "default" : "pointer",
      }}
    >
      <path
        d="M17.9545 25.9091L19.3217 24.5597L13.6932 18.9311H28.2706V16.978H13.6932L19.3217 11.3672L17.9545 10L10 17.9545L17.9545 25.9091Z"
        fill={isHovered ? "#2E379E" : color}
      />
    </svg>
  );
}
