export default function DownloadIcon({ hover }) {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9318 11.2372L15.9197 10.2118L11.6983 14.4332L11.6983 3.50018L10.2335 3.50018L10.2335 14.4332L6.02539 10.2118L5 11.2372L10.9659 17.2031L16.9318 11.2372Z"
        fill={hover ? "#FDFEFF" : "#DF0E86"}
      />
      <path
        d="M5.75 19.5L17 19.5"
        stroke={hover ? "#FDFEFF" : "#DF0E86"}
        strokeWidth="1.5"
      />
    </svg>
  );
}
