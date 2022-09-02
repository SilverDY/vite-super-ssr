// import createCache from '@emotion/cache';
// import createServer from '@emotion/server/create-instance';

// @ts-ignore
import createServer from '@emotion/server/create-instance/dist/emotion-server-create-instance.cjs.js';
// @ts-ignore
import emotionCreateCache from '@emotion/cache/dist/emotion-cache.cjs.js';

const isDev = process.env.NODE_ENV === 'development';

export const createEmotionServer = isDev ? (createServer as any) : (createServer.default as any);
const createCache = isDev ? emotionCreateCache : emotionCreateCache.default;

const isBrowser = typeof document !== 'undefined';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export function createEmotionCache() {
  let insertionPoint: any;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'css', insertionPoint });
}
