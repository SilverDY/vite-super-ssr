import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import { server } from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

expect.extend(matchers);
