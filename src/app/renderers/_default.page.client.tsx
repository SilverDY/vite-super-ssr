/* eslint-disable no-console */
import { Root, createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageContextBuiltIn } from 'vite-plugin-ssr';
import { HelmetProvider } from 'react-helmet-async';

import { AuthProvider } from '~shared/lib/auth';
import { PageContext, PageContextProvider } from '~shared/model';
import { CssBaseline } from '~shared/ui';

import { clientProvider } from '../lib/emotion';

// export const clientRouting = true;

let root: Root;

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page } = pageContext;

  const stylesProvider = await clientProvider();

  let page = (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <BrowserRouter>
        <CssBaseline />

        <PageContextProvider pageContext={pageContext}>
          <HelmetProvider>
            <Page {...pageContext.pageProps} />
          </HelmetProvider>
        </PageContextProvider>
      </BrowserRouter>
    </AuthProvider>
  );

  page = stylesProvider.provide(page);

  const container = document.getElementById('react-root')!;

  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }

    root.render(page);
  }
}

export function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.');
}
