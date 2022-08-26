import { ThemeOptions, createTheme as createThemeMui } from '@mui/material';

export const htmlFontSize = 16;

export const pxToRem = (px: number) => px / htmlFontSize + 'rem';
const sizes = {
  header: 56,
  navigation: 0,
};

export const createTheme = (themeStyles: ThemeOptions) =>
  createThemeMui({
    ...themeStyles,
    sizes,
    typography: {
      ...themeStyles.typography,
      pxToRem: pxToRem,
    },
  } as ThemeOptions);
