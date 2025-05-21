export default function DownloadIcon({ hover, colorScheme }) {
  // Определяем цвета в зависимости от схемы
  const colors = {
    pink: {
      default: "#DF0E86", // Розовый
      hover: "#FDFEFF",   // Белый
    },
    blue: {
      default: "#007CBC", // Синий
      hover: "#FDFEFF",   // Белый
    },
    // Можно добавить другие схемы
  };

  // Выбираем текущую схему
  const currentColors = colors[colorScheme] || colors.pink;

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
        fill={hover ? currentColors.hover : currentColors.default}
      />
      <path
        d="M5.75 19.5L17 19.5"
        stroke={hover ? currentColors.hover : currentColors.default}
        strokeWidth="1.5"
      />
    </svg>
  );
}