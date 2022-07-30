import { ComponentProps, FC } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { defaultLocale } from './locales';

export const IntlProvider: FC<ComponentProps<typeof ReactIntlProvider>> = ({
  locale,
  children,
  messages,
  ...props
}) => {
  if (!messages) {
    // eslint-disable-next-line no-console
    console.warn(`There is no messages data for "${locale}"`);
  }

  return (
    <ReactIntlProvider locale={locale} messages={messages} defaultLocale={defaultLocale} {...props}>
      {children}
    </ReactIntlProvider>
  );
};
