import '@mui/material/styles';
declare module '@mui/material/styles' {
  type ThemeTypes = 'light';

  interface Sizes {
    header: number;
    navigation: number;
  }
  interface SizesOptions extends Partial<Sizes> {}

  interface Theme {
    type: 'light' | 'dark';
    sizes: Sizes;
  }
  interface ThemeOptions {
    type?: 'light' | 'dark';
    sizes?: SizesOptions;
  }

  interface Palette {
    tooltip: string;
  }
  interface PaletteOptions {
    tooltip?: string;
  }

  interface TypeBackground {
    custom: { 100: string };
  }

  interface Typography {
    pxToRem: (px: number) => string;
  }
  interface TypographyOptions {
    pxToRem?: (px: number) => string;
  }
}
