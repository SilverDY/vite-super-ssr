import { PaletteOptions } from '@mui/material/styles';

export const palette: PaletteOptions = {
  primary: {
    main: '#2d94ff',
    light: '#92d0ff',
    dark: '#00487f',
  },
  secondary: {
    main: '#ff4f8d',
  },
  success: {
    main: '#88c24e',
    light: '#d9ffdb',
    // dark: '#4ec854',
    contrastText: '#fff',
  },
  error: {
    main: '#E63946',
    light: 'rgba(255,102,102,.85)',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  background: {
    paper: '#fff',
    default: '#fbfbff',
    // default: '#f1f4f8',
    // default: '#f4f5f7', // blueish
    // default: '#F0F5FA',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  divider: '#ededed',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.06)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  tooltip: '#292929',
};
