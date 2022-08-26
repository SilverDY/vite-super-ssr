import { Suspense } from 'react';

import { AppProps } from '../types';

export const withSuspense = (component: Component) => (props: AppProps) => {
  return <Suspense fallback="Loading...">{component(props)}</Suspense>;
};
