import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';

import { CssBaseline } from '@mui/material';

import { createEmotionCache } from '~shared/lib/utils';

import { App } from '../App';

const cache = createEmotionCache();

const rootElement = (
  <CacheProvider value={cache}>
    <StrictMode>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </StrictMode>
  </CacheProvider>
);

hydrateRoot(document.getElementById('app') as HTMLElement, rootElement);
