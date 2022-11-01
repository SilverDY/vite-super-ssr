import { ThemeProvider, light } from '~shared/lib/styles';

import { TestRootProvidersProps } from './types';

export const withStyles = (component: Component) => (props: TestRootProvidersProps) =>
  <ThemeProvider theme={light}>{component(props)}</ThemeProvider>;
