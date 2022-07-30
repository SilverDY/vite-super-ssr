import fs from 'fs';
import path from 'path';

import express from 'express';
import chalk from 'chalk';
import createEmotionServer from '@emotion/server/create-instance';

import { createEmotionCache } from '../shared/lib/utils';

const rootDir = __dirname + '/../../';

const isTest = process.env.NODE_ENV === 'test';
const port: number = Number(process.env.PORT) || 5173;

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort?: number
) {
  const resolve = (p: string) => path.resolve(root, p);

  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : '';

  const app = express();
  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite: any;

  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    });

    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());

    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req: any, res: any) => {
    const emotionCache = createEmotionCache();

    try {
      const url = req.originalUrl;
      const { extractCriticalToChunks, constructStyleTagsFromChunks } =
        createEmotionServer(emotionCache);

      let template;
      let render;

      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/app/entries/server.tsx')).render;
      } else {
        template = indexProd;
        // @ts-ignore
        render = (await import('../../dist/server/entry-server.js')).render;
      }

      // const context: StaticRouterContext = {};
      const appHtml = render(url, emotionCache);

      // Grab the CSS from emotion
      const emotionChunks = extractCriticalToChunks(appHtml);
      const emotionCss = constructStyleTagsFromChunks(emotionChunks);

      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<!--app-styles-->`, emotionCss);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      const error: Error = e as Error;

      !isProd && vite.ssrFixStacktrace(error);

      // eslint-disable-next-line no-console
      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer(rootDir).then(({ app }) => {
    app.listen(port, '0.0.0.0', () => {
      // eslint-disable-next-line no-console
      console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: 🌎 http://localhost:${port}`)
      );
    });
  });
}
