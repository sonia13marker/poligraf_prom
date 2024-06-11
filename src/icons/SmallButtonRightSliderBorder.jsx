import { useState } from "react";

export default function SmallButtonRightSliderBorder({ color, onClickAction }) {
  const [isHovered, setIsHovered] = useState(false);
  return isHovered ? (
    <svg
      width="33"
      height="31"
      viewBox="0 0 33 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClickAction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        pointerEvents: color === "#D5D6D7" ? "none" : "auto",
        cursor: color === "#007CBC" ? "default" : "pointer",
      }}
    >
      <rect x="0.5" y="0.5" width="32" height="30" rx="8.5" fill="#2E379E" />
      <rect x="0.5" y="0.5" width="32" height="30" rx="8.5" stroke="#2E379E" />
      <path
        d="M17.3401 21L16.3673 20.067L20.3722 16.1752H10V14.8248H20.3722L16.3673 10.9453L17.3401 10L23 15.5L17.3401 21Z"
        fill="#FDFEFF"
      />
    </svg>
  ) : (
    <svg
      width="33"
      height="31"
      viewBox="0 0 33 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClickAction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        pointerEvents: color === "#D5D6D7" ? "none" : "auto",
        cursor: color === "#007CBC" ? "default" : "pointer",
      }}
    >
      <rect
        x="0.5"
        y="0.5"
        width="32"
        height="30"
        rx="8.5"
        stroke={color || "#2E379E"}
      />
      <path
        d="M17.3401 21L16.3673 20.067L20.3722 16.1752H10V14.8248H20.3722L16.3673 10.9453L17.3401 10L23 15.5L17.3401 21Z"
        fill={color || "#2E379E"}
      />
    </svg>
  );
}
