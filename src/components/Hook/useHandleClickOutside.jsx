import { useEffect } from "react";

const useHandleClickOutside = (targetSelector, onClickOutside) => {
  const handleClick = (e) => {
    if (targetSelector && targetSelector.some((id) => e.target.id === id))
      return;
    onClickOutside();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
};
export default useHandleClickOutside;