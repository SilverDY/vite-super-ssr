import React, { FC } from 'react';
import compose from 'compose-function';

import { withStyles } from './withStyles';
import { withLocalization } from './withLocalization';
import { withAtomState } from './withAtomState';
import { withSuspense } from './withSuspense';
import { withQueryParams } from './withQueryParams';

import { TestRootProvidersProps } from './types';

const TestRootProvidersWithQuery: FC<TestRootProvidersProps> = ({ children }) => {
  return children;
};

const Root: React.FC<TestRootProvidersProps> = compose<any>(
  withStyles,
  withLocalization,
  withAtomState,
  withQueryParams,
  withSuspense
)(TestRootProvidersWithQuery);

export { Root as TestRootProvidersWithQuery };
