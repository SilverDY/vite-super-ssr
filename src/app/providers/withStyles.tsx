import { ThemeProvider, light } from '~shared/lib/styles';

import { AppProps } from '../types';

// import 'reset-css';

export const withStyles = (component: Component) => (props: AppProps) =>
  <ThemeProvider theme={light}>{component(props)}</ThemeProvider>;
