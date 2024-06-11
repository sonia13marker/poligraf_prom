import { useState } from "react";

export default function ButtonRightSliderNoBorder({
  color,
  onClickAction,
  type,
}) {
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
        d="M20.5866 25.9091L19.2194 24.5597L24.8479 18.9311H10.2705V16.978H24.8479L19.2194 11.3672L20.5866 10L28.5411 17.9545L20.5866 25.9091Z"
        fill={isHovered ? (type === "mobile" ? color : "#2E379E") : color}
      />
    </svg>
  );
}
