import { renderToStream } from 'react-streaming/server';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom/server';
import { PageContextBuiltIn } from 'vite-plugin-ssr';
import { HelmetProvider } from 'react-helmet-async';

import { AuthProvider } from '~shared/lib/auth';
import { PageContext, PageContextProvider } from '~shared/model';
import { CssBaseline } from '~shared/ui';

import { ssrStylesCollector } from '../lib/emotion';

import { getHtml } from './html';

export const passToClient = ['pageProps', 'redirectTo'];

const helmetContext: Record<string, any> = {};

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps, urlOriginal, redirectTo, cookies, hostname, protocol } = pageContext;

  const collector = await ssrStylesCollector();

  if (redirectTo) {
    return {
      pageContext: {
        redirectTo,
      },
    };
  }

  let page = (
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
  );

  page = collector.collect(page);

  const renderedPage = renderToString(page);
  const stream = await renderToStream(page, { disable: true });

  const emotionCss = collector.toString(renderedPage);
  const documentHtml = getHtml({ stream, emotionCss, helmet: helmetContext.helmet });

  return {
    documentHtml,
    pageContext: {},
  };
}
