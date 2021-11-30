import { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current.contains(event.target)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useClickOutside;
