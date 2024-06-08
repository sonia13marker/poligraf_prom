import { useEffect, useState } from "react";

export default function ResizeComponent({
  resizeValue,
  resizedComponent,
  defaultComponent,
}) {
  const [isResized, setIsResized] = useState(window.innerWidth <= resizeValue);

  const handleResize = () => {
    setIsResized(window.innerWidth <= resizeValue);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <>{isResized ? resizedComponent : defaultComponent}</>;
}
