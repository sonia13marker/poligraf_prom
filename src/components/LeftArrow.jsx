export default function LeftArrow({ hover, type }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_616_6225)">
        <path
          d="M11.5 1.5L4.5 7.81944L11.5 14.5"
          stroke={
            type === "news"
              ? hover
                ? "#FDFEFF"
                : "#01A3D4"
              : type === "providers"
                ? hover
                  ? "#FDFEFF"
                  : "#DF0E86"
                : "#DF0E86"
          }
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_616_6225">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
