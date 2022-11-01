import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { TestRootProvidersProps } from './types';

export const withQueryParams = (component: Component) => (props: TestRootProvidersProps) => {
  return <QueryParamProvider adapter={ReactRouter6Adapter}>{component(props)}</QueryParamProvider>;
};
