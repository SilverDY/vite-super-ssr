import { Provider } from '~shared/lib/atom-state';

import { AppProps } from '../types';

export const withAtomState = (component: Component) => (props: AppProps) => {
  return <Provider>{component(props)}</Provider>;
};
