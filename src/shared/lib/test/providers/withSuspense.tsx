import { Suspense } from 'react';

import { TestRootProvidersProps } from './types';

export const withSuspense = (component: Component) => (props: TestRootProvidersProps) => {
  return <Suspense fallback="Loading...">{component(props)}</Suspense>;
};
