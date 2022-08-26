import { HelmetServerState } from 'react-helmet-async';
import { renderToStream } from 'react-streaming/server';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr';

interface Template {
  stream: Awaited<ReturnType<typeof renderToStream>>;
  root?: string;
  emotionCss?: string;
  helmet?: HelmetServerState;
}

export const getHtml = ({ stream, helmet, emotionCss, root = 'react-root' }: Template) => {
  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/vite.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          content="width=device-width,initial-scale=1,maximum-scale=10,minimum-scale=.25,user-scalable=yes"
          name="viewport"
        />
        <meta content="text/html; charset=utf-8" http-equiv="content-type" />

        <title>VSSSR</title>
        <meta name="description" content="This template repo tries to achieve the minimum viable example for a modern front-end application" />

        <meta name="emotion-insertion-point" content="" />

        ${helmet ? dangerouslySkipEscape(renderHelmetMeta(helmet)) : ''}
        ${emotionCss ? dangerouslySkipEscape(emotionCss) : ''}

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
        />
      </head>
      <body>
        <div id="${root}">${stream}</div>
      </body>
    </html>`;
};

function renderHelmetMeta(helmet: HelmetServerState) {
  return `
    ${helmet.title.toString()}
    ${helmet.priority.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
  `;
}
