import { IntlProvider, useLocaleProvider } from '~shared/lib/l10n';

import { AppProps } from '../types';

export const withLocalization = (component: Component) => (props: AppProps) => {
  const intlProviderProps = useLocaleProvider();

  return <IntlProvider {...intlProviderProps}>{component(props)}</IntlProvider>;
};
