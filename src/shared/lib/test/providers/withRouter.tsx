import { BrowserRouter } from 'react-router-dom';

import { TestRootProvidersProps } from './types';

export const withRouter = (component: Component) => (props: TestRootProvidersProps) =>
  <BrowserRouter>{component(props)}</BrowserRouter>;
