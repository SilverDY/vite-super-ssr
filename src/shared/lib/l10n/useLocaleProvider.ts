import { useEffect, useMemo } from 'react';

import { locales as commonLocales, defaultLocale } from './locales';

const userLocale = defaultLocale;

export const useLocaleProvider = (messages?: any) => {
  const localeMessages = useMemo(
    () =>
      messages
        ? { ...commonLocales[userLocale], ...messages[userLocale] }
        : commonLocales[userLocale],
    [messages]
  );

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('loaded locale', userLocale);
  }, []);

  return {
    locale: userLocale,
    messages: localeMessages,
  };
};
