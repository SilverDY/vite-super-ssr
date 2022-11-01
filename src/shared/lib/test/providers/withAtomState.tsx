import { Provider } from '~shared/lib/atom-state';

import { TestRootProvidersProps } from './types';

export const withAtomState = (component: Component) => (props: TestRootProvidersProps) => {
  return <Provider>{component(props)}</Provider>;
};
