import { useMemo, useState, createContext } from 'react';
import lightThemeStyle from './lightColor';
import darkThemeStyle from './darkColor';

export const tokens = (mode:string) => ({
  ...(mode === 'dark' ? darkThemeStyle : lightThemeStyle),
});

export const themeSettings = (mode:string) => {
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

type PaletteType ={
  mode:string
}

type ColorModeType2 = {
  toggleColorMode: ()=>void;
}

type ColorModeType = {
  toggleColorMode: ()=>void;
  colorMode:ColorModeType2;
  palette:PaletteType;
}

export const ColorModeContext = createContext<ColorModeType>({
  toggleColorMode: () => { },
  colorMode: {
    toggleColorMode:()=>{}
  },
  palette:{
    mode:''
  }
});
