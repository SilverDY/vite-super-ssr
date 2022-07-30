import { IntlProvider, useLocaleProvider } from '~shared/lib/l10n';

export const withLocalization = (component: Component) => () => {
  const intlProviderProps = useLocaleProvider();

  return <IntlProvider {...intlProviderProps}>{component()}</IntlProvider>;
};
