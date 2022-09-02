import { ReactElement, createElement } from 'react';
// @ts-ignore
import emotionCreateCache from '@emotion/cache';
// @ts-ignore
import { CacheProvider } from '@emotion/react';

// @ts-ignore
const createCache = emotionCreateCache.default || emotionCreateCache;

function getCache() {
  const cache = createCache({ key: 'css' });
  cache.compat = true;

  return cache;
}

export async function ssrStylesCollector() {
  // A subdependency of this dependency calls Buffer on import,
  // so it must be imported only in Node environment.
  // https://github.com/emotion-js/emotion/issues/2446

  const { default: importedServer }: any = await import(
    // @ts-ignore
    '@emotion/server/create-instance'
  );

  const createEmotionServer = importedServer?.default || importedServer; // because @emotion/server/create-instance is CommonJS

  const cache = getCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  return {
    collect(app: ReactElement) {
      return createElement(CacheProvider, { value: cache }, app);
    },
    toString(html: string) {
      const emotionChunks = extractCriticalToChunks(html);

      return constructStyleTagsFromChunks(emotionChunks);
    },
  };
}

export function clientProvider() {
  const cache = getCache();

  return {
    provide(app: ReactElement) {
      return createElement(CacheProvider, { value: cache }, app);
    },
  };
}
