import { IntlProvider } from './IntlProvider';
import { useLocaleProvider } from './useLocaleProvider';

export function provideTranslation<P extends Record<string, any>>(
  messages: any,
  WrappedComponent: React.ComponentType<P>
) {
  const TranslatedComponent = (props: P) => {
    const intlProviderProps = useLocaleProvider(messages);

    return (
      <IntlProvider {...intlProviderProps}>
        <WrappedComponent {...props} />
      </IntlProvider>
    );
  };

  return TranslatedComponent;
}
