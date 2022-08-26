import { renderToStream } from 'react-streaming/server';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom/server';
import { PageContextBuiltIn } from 'vite-plugin-ssr';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';

import { AuthProvider } from '~shared/lib/auth';
import { PageContext, PageContextProvider } from '~shared/model';
import { CssBaseline } from '~shared/ui';

import { createEmotionCache, createEmotionServer } from '../lib/emotion/emotion.server';

import { getHtml } from './html';

export const passToClient = ['pageProps', 'redirectTo'];

const helmetContext: Record<string, any> = {};

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps, urlOriginal, redirectTo, cookies, hostname, protocol } = pageContext;
  const emotionCache = createEmotionCache();
  const emotionServer = createEmotionServer(emotionCache);

  if (redirectTo) {
    return {
      pageContext: {
        redirectTo,
      },
    };
  }

  const page = (
    <CacheProvider value={emotionCache}>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        serverCookies={cookies}
        cookieDomain={hostname}
        cookieSecure={protocol === 'https'}
      >
        <StaticRouter location={urlOriginal}>
          <CssBaseline />
          <PageContextProvider pageContext={pageContext}>
            <HelmetProvider context={helmetContext}>
              <Page {...pageProps} />
            </HelmetProvider>
          </PageContextProvider>
        </StaticRouter>
      </AuthProvider>
    </CacheProvider>
  );

  const renderedPage = renderToString(page);

  const stream = await renderToStream(page, { disable: true });

  const emotionChunks = emotionServer.extractCriticalToChunks(renderedPage);
  const emotionCss = emotionServer.constructStyleTagsFromChunks(emotionChunks);

  const documentHtml = getHtml({ stream, emotionCss, helmet: helmetContext.helmet });

  return {
    documentHtml,
    pageContext: {},
  };
}
