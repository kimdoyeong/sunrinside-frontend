import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import themeSlice from "../store/slices/theme";
import { RootState } from "../store/reducers";

function useDarkMode() {
  const darkMode = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();

  const setDarkMode = useCallback(
    (v: boolean) => {
      dispatch(themeSlice.actions.setDark(v));
    },
    [dispatch]
  );
  return { isDark: darkMode, setDarkMode };
}

let isDarkModeEffectApplyed = false;

export function useDarkModeEffects() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isDarkModeEffectApplyed) return;
    isDarkModeEffectApplyed = true;

    function setDarkMode(v: boolean) {
      dispatch(themeSlice.actions.setDark(v));
    }
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
  }, [dispatch]);
}

export default useDarkMode;
