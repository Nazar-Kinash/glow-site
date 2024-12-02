import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en" className="no-js l scroll-pt-4 xl:scroll-pt-14">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-site-verification"
          content="I4egQ7qOh-ZASJcyRGFSfIvpiIm9jLhwy-clP3dcR5Q"
        />
        <Script
          id="pixel-script-poptin"
          src="https://cdn.popt.in/pixel.js?id=76da613987c45"
          strategy="lazyOnload"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-5NP2XWNRBX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
