import { useState } from "react";

export default function ButtonRightSliderBorder({
  type,
  color,
  onClickAction,
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (type === "providers") {
    return isHovered ? (
      <svg
        width="49"
        height="47"
        viewBox="0 0 49 47"
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
          x="1.02051"
          y="1.11377"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          fill="#007CBC"
        />
        <rect
          x="1.02051"
          y="1.11377"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          stroke="#007CBC"
          strokeWidth="1.5"
        />
        <path
          d="M25.5866 31.2729L24.2194 29.9234L29.8479 24.2949H15.2705V22.3418H29.8479L24.2194 16.731L25.5866 15.3638L33.5411 23.3183L25.5866 31.2729Z"
          fill="#FDFEFF"
        />
      </svg>
    ) : (
      <svg
        width="49"
        height="46"
        viewBox="0 0 49 46"
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
          x="1.02051"
          y="0.75"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          stroke={color || "#007CBC"}
          strokeWidth="1.5"
        />
        <path
          d="M25.5866 30.9091L24.2194 29.5597L29.8479 23.9311H15.2705V21.978H29.8479L24.2194 16.3672L25.5866 15L33.5411 22.9545L25.5866 30.9091Z"
          fill={color || "#007CBC"}
        />
      </svg>
    );
  } else if (type === "news") {
    return isHovered ? (
      <svg
        width="49"
        height="46"
        viewBox="0 0 49 46"
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
          x="1.02051"
          y="0.75"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          fill="#01A3D4"
        />
        <rect
          x="1.02051"
          y="0.75"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          stroke="#01A3D4"
          strokeWidth="1.5"
        />
        <path
          d="M25.5866 30.9091L24.2194 29.5597L29.8479 23.9311H15.2705V21.978H29.8479L24.2194 16.3672L25.5866 15L33.5411 22.9545L25.5866 30.9091Z"
          fill="#FDFEFF"
        />
      </svg>
    ) : (
      <svg
        width="49"
        height="46"
        viewBox="0 0 49 46"
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
          x="1.02051"
          y="0.75"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          stroke={color || "#01A3D4"}
          strokeWidth="1.5"
        />
        <path
          d="M25.5866 30.9091L24.2194 29.5597L29.8479 23.9311H15.2705V21.978H29.8479L24.2194 16.3672L25.5866 15L33.5411 22.9545L25.5866 30.9091Z"
          fill={color || "#01A3D4"}
        />
      </svg>
    );
  } else if (type === "contacts") {
    return isHovered ? (
      <svg
        width="49"
        height="46"
        viewBox="0 0 49 46"
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
          x="1.02051"
          y="0.75"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          fill="#2E379E"
        />
        <rect
          x="1.02051"
          y="0.75"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          stroke="#2E379E"
          strokeWidth="1.5"
        />
        <path
          d="M25.5866 30.9091L24.2194 29.5597L29.8479 23.9311H15.2705V21.978H29.8479L24.2194 16.3672L25.5866 15L33.5411 22.9545L25.5866 30.9091Z"
          fill="#FDFEFF"
        />
      </svg>
    ) : (
      <svg
        width="49"
        height="46"
        viewBox="0 0 49 46"
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
          x="1.02051"
          y="0.75"
          width="46.7706"
          height="44.4091"
          rx="14.25"
          stroke={color || "#2E379E"}
          strokeWidth="1.5"
        />
        <path
          d="M25.5866 30.9091L24.2194 29.5597L29.8479 23.9311H15.2705V21.978H29.8479L24.2194 16.3672L25.5866 15L33.5411 22.9545L25.5866 30.9091Z"
          fill={color || "#2E379E"}
        />
      </svg>
    );
  }
}
