import '@mui/material/styles';

declare module '@mui/material/styles' {
  type ThemeTypes = 'light';

  interface Screens {
    mobile: number;
    mobileL: number;
    tablet: number;
    laptop: number;
    laptopL: number;
  }
  interface ScreensOptions extends Partial<Screens> {}

  interface Sizes {
    header: number;
    navigation: number;
    openedNavigation: number;
    bottomNavigation: number;
  }
  interface SizesOptions extends Partial<Sizes> {}

  interface Theme {
    type: 'light' | 'dark';
    screens: Screens;
    sizes: Sizes;
  }
  interface ThemeOptions {
    type?: 'light' | 'dark';
    screens?: ScreensOptions;
    sizes?: SizesOptions;
  }

  interface Palette {
    tooltip: string;
  }
  interface PaletteOptions {
    tooltip?: string;
  }

  interface ZIndex {
    content: number;
    drawer: number;
    appHeader: number;
    sidebar: number;
    modal: number;
    tooltip: number;
  }
  interface ZIndexOptions {
    content: number;
    drawer: number;
    appHeader: number;
    sidebar: number;
    modal: number;
    tooltip: number;
  }
}
