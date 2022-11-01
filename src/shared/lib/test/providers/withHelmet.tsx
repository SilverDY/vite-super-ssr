import { Helmet } from 'react-helmet-async';

import { TestRootProvidersProps } from './types';

export const withHelmet = (component: Component) => (props: TestRootProvidersProps) => {
  return (
    <>
      <Helmet
        defaultTitle="Personio"
        titleTemplate="Personio - %s"
        link={[{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }]}
      />
      {component(props)}
    </>
  );
};
