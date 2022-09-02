import path from 'node:path';
import { fileURLToPath } from 'node:url';

import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { loadEnv } from 'vite';
import { renderPage } from 'vite-plugin-ssr';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname + '/../../';

const mode = process.env.NODE_ENV || 'development';
const viteEnv = loadEnv(mode, rootDir + '/./envs');
process.env = { ...process.env, ...viteEnv };

const isTest = process.env.NODE_ENV === 'test';
const port: number = Number(process.env.VITE_PORT) || 8500;

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort?: number
) {
  const resolve = (p: string) => path.resolve(root, p);

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
    app.use((await import('sirv')).default(resolve('dist/client')));
  }

  app.use(cors());

  app.use(cookieParser());

  app.use('*', async (req, res, next) => {
    try {
      const pageContextInit: any = {
        urlOriginal: req.originalUrl,
        redirectTo: null,
        cookies: req.cookies,
        protocol: req.protocol,
        hostname: req.hostname,
      };

      const pageContext = await renderPage(pageContextInit);
      const { httpResponse, redirectTo } = pageContext;

      if (redirectTo) {
        res.redirect(307, redirectTo);
      } else if (!httpResponse) {
        return next();
      } else {
        httpResponse.pipe(res);
      }
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
    app
      .listen(port, '0.0.0.0', () => {
        // eslint-disable-next-line no-console
        console.log(
          `[${new Date().toISOString()}]`,
          chalk.blue(`App is running: 🌎 http://localhost:${port}`)
        );
      })
      .on('error', (error: any) => {
        if (error.syscall !== 'listen') {
          throw error;
        }

        const isPipe = (portOrPipe: number) => Number.isNaN(portOrPipe);
        const bind = isPipe(port) ? 'Pipe ' + port : 'Port ' + port;

        switch (error.code) {
          case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
          case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
          default:
            throw error;
        }
      });
  });
}
