export default function SmallLeftArrow({ hover, type }) {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_260_8487)">
        <path
          d="M11 1.5L4 7.81944L11 14.5"
          stroke={
            type === "news"
              ? hover
                ? "#FDFEFF"
                : "#01A3D4"
              : type === "providers"
                ? hover
                  ? "#FDFEFF"
                  : "#DF0E86"
                : type === "main page"
                  ? hover
                    ? "#FDFEFF"
                    : "#007CBC"
                  : "#DF0E86"
          }
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_260_8487">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
