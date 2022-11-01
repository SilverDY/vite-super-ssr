import { ReactElement } from 'react';
import { createMemoryHistory } from 'history';
import {
  PrettyDOMOptions,
  RenderOptions,
  cleanup,
  prettyDOM,
  render as pureRender,
} from '@testing-library/react';
import { afterEach } from 'vitest';

import { Router } from 'react-router';

import { TestRootProviders, TestRootProvidersWithQuery } from './providers';

afterEach(() => {
  cleanup();
});

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  pureRender(ui, {
    wrapper: TestRootProviders,
    ...options,
  });

export const renderWithRouter = (ui: ReactElement, initialRoute: string) => {
  const history = createMemoryHistory({ initialEntries: [initialRoute] });

  return {
    ...pureRender(
      <Router location={history.location} navigator={history}>
        <TestRootProvidersWithQuery>{ui}</TestRootProvidersWithQuery>
      </Router>
    ),
    history,
  };
};

export const debugHtml = (
  dom?: Element | Document,
  maxLength?: number,
  options?: PrettyDOMOptions
) => {
  // eslint-disable-next-line no-console
  return console.log(prettyDOM(dom, maxLength, options));
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
export { pureRender };
