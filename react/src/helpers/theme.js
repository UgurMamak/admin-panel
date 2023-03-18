import { useMemo, useState, createContext } from 'react';
import lightThemeStyle from './lightColor';
import darkThemeStyle from './darkColor';

export const tokens = (mode) => ({
  ...(mode === 'dark' ? darkThemeStyle : lightThemeStyle),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    token: {
      ...colors,
    },
  };
};

export const useThemeMode = () => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const themeType = useMemo(() => themeSettings(mode), [mode]);

  const palette = {
    mode,
  };

  return [themeType, colorMode, palette];
};

export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});
