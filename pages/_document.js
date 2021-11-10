/* eslint-disable @next/next/no-css-tags */
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
        <link
          href="https://unpkg.com/@blueprintjs/icons@^3.4.0/lib/css/blueprint-icons.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/@blueprintjs/core@^3.10.0/lib/css/blueprint.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
