import compose from 'compose-function';

import { withStyles } from './withStyles';
import { withLocalization } from './withLocalization';
import { withAtomState } from './withAtomState';
import { withHelmet } from './withHelmet';
import { withSuspense } from './withSuspense';

export const withProviders = compose<any>(
  withStyles,
  withLocalization,
  withHelmet,
  withAtomState,
  withSuspense
);

export * from './AuthProvider';
