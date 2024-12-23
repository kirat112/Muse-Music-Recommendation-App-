import { useRef, useEffect } from "react";

const useDebounce = (callback, delay) => {
  const timerRef = useRef(null);

  const debounce = (...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      console.log("debounce", ...args);
      callback(...args);
    }, delay);
  };

  // Cleanup the timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return debounce;
};

export default useDebounce;
