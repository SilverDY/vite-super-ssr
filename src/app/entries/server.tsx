import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { CssBaseline } from '@mui/material';

import { App } from '../App';

export function render(url: string, emotionCache: EmotionCache) {
  return renderToString(
    <CacheProvider value={emotionCache}>
      <StaticRouter location={url}>
        <CssBaseline />
        <App />
      </StaticRouter>
    </CacheProvider>
  );
}
