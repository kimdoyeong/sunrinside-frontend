import { useState, useEffect } from "react";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const eventListener = (e: any) => {
      setDarkMode(!!e.matches);
    };
    const matchMedia =
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)");
    if (matchMedia) {
      matchMedia.addEventListener &&
        matchMedia.addEventListener("change", eventListener);
      matchMedia.addListener(eventListener); // Safari
    }
    setDarkMode(!!(matchMedia && matchMedia.matches));

    return () => {
      if (!matchMedia) return;
      matchMedia.removeEventListener &&
        matchMedia.removeEventListener("change", eventListener);
      matchMedia.removeListener && matchMedia.removeListener(eventListener);
    };
  }, []);

  return darkMode;
}

export default useDarkMode;
