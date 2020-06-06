import useDarkMode, { useDarkModeEffects } from "./useDarkMode";

function useTheme() {
  const { isDark } = useDarkMode();

  useDarkModeEffects();
  const theme = {
    isDark,
  };

  return theme;
}

export default useTheme;
