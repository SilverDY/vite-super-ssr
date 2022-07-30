import { enLocale } from './en-US';
import { LocaleCodes } from './types';

export * from './types';

export const defaultLocale = LocaleCodes.ENGLISH;

export const locales = {
  [LocaleCodes.ENGLISH]: enLocale,
};
