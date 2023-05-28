import { useMemo, useState, createContext } from 'react';
import lightThemeStyle from './lightColor';
import darkThemeStyle from './darkColor';

// seçili temayı tutacak light, dark =colorMode
// tema değiştiren fonksiyonu tutacak. =changeColorMode
// renk paletini tutacak. =palette

interface ITheme {
  currentTheme: string;
  colorPalette: string | (() => void) | { token: {} };
  changeColorEvent: { run: () => void } | undefined;
}

export const ThemeContext = createContext<ITheme>({
  currentTheme:'',
  colorPalette:'',
  changeColorEvent:{run:()=>{}}
});

export const themeSettings = (mode: string) => {
  let colors: object = {};

  if (mode === 'dark') {
    colors = darkThemeStyle;
  } else {
    colors = lightThemeStyle;
  }

  return {
    token: {
      ...colors,
    },
  };
};

export const useThemeMode = () => {
  const [mode, setMode] = useState('light');

  const changeColorEvent = useMemo(
    () => ({
      run: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  //renklerin tutulduğu object döner.
  const colorPalette = useMemo(() => themeSettings(mode), [mode]);

  //seçili tema ismini döner.
  const currentTheme = mode;
  return {
    currentTheme,
    colorPalette,
    changeColorEvent
  }
};