import { ThemeProvider, light } from '~shared/lib/styles';

// import 'reset-css';

export const withStyles = (component: Component) => () =>
  <ThemeProvider theme={light}>{component()}</ThemeProvider>;
