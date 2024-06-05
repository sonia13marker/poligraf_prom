export default function SmallRightArrow({ hover }) {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9048 5L11.8571 6.01786L16.1701 10.2634L5 10.2634L5 11.7366L16.1701 11.7366L11.8571 15.9687L12.9048 17L19 11L12.9048 5Z"
        fill={hover ? "#FDFEFF" : "#282828"}
      />
    </svg>
  );
}
