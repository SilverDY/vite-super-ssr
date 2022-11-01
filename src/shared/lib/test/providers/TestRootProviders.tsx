import React, { FC } from 'react';
import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withStyles } from './withStyles';
import { withLocalization } from './withLocalization';
import { withAtomState } from './withAtomState';
import { withSuspense } from './withSuspense';
import { withQueryParams } from './withQueryParams';

import { TestRootProvidersProps } from './types';

const TestRootProviders: FC<TestRootProvidersProps> = ({ children }) => {
  return children;
};

const Root: React.FC<TestRootProvidersProps> = compose(
  withRouter,
  withStyles,
  withLocalization,
  withAtomState,
  withQueryParams,
  withSuspense
)(TestRootProviders);

export { Root as TestRootProviders };
