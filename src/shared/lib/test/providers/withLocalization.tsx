import { IntlProvider, useLocaleProvider } from '~shared/lib/l10n';

import { TestRootProvidersProps } from './types';

export const withLocalization = (component: Component) => (props: TestRootProvidersProps) => {
  const intlProviderProps = useLocaleProvider();

  return <IntlProvider {...intlProviderProps}>{component(props)}</IntlProvider>;
};
