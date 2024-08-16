import cx from 'clsx';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef } from 'react';
import Analytics from '../components/Analytics';
import CookieBanner from '../components/CookieBanner';
import { getFullDescription, getFullTitle } from '../components/HeadTitle';
import LoadingProgress from '../components/LoadingProgress';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import StructuredData from '../components/StructuredData';
import { useMedia } from '../lib/agent';
import { useReferrer } from '../lib/utils';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useMedia();
  useReferrer();

  const getLayout = useMemo(() => {
    return (
      Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
    );
  }, [Component]);

  const errorsRef = useRef([]);
  useEffect(() => {
    const onError = (e) => {
      console.log(e);
      errorsRef.current.push({
        url: window.location.href,
        e: {
          message: e?.message,
          filename: e?.filename,
          lineno: e?.lineno,
          colno: e?.colno,
          error: e?.error,
        },
        ua: window?.navigator?.userAgent,
      });
    };

    const onUnload = () => {
      if ('sendBeacon' in window?.navigator) {
        if (!errorsRef.current.length) return;
        const fd = new FormData();
        try {
          fd.append('err', JSON.stringify(errorsRef.current));
        } catch (e) {
          fd.append(
            'err',
            JSON.stringify({ status: "Couldn't stringify payload" })
          );
        }
        errorsRef.current = [];
        window.navigator.sendBeacon('/err.php', fd);
      }
    };

    document.addEventListener('visibilitychange', onUnload);
    window.addEventListener('error', onError);

    return () => {
      document.removeEventListener('visibilitychange', onUnload);
      window.removeEventListener('error', onError);
    };
  }, []);

  const canonicalUrl = useMemo(() => {
    let u = 'https://glow.team' + router.asPath;
    if (u[u.length - 1] !== '/') {
      u += '/';
    }

    return u;
  }, [router.asPath]);

  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{getFullTitle('UX/UI & Branding Product Design Agency')}</title>
        <meta
          name="description"
          content={getFullDescription(
            `Glow Team specializes in design, transforming businesses through creativity and innovation. Explore our services for success.`
          )}
        ></meta>
        <meta property="akey" content="needle-4" />
        <meta property="og:image" content="/img/og-image.png?v=2" />
        <meta
          name="p:domain_verify"
          content="6e1fb96305a72b68c37e78ef360a42ff"
        />
        <meta property="akey" content="needle-4" />
        <meta property="og:image" content="/img/og-image.png?v=2" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/og-image.png?v=2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.remove("no-js");
              document.documentElement.classList.add("js");
          `,
          }}
        />
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function updateScreenHeight() {
              document.documentElement.style.setProperty('--vh', window.innerHeight / 100 + 'px');
              document.documentElement.style.setProperty('--lvh', document.documentElement.clientHeight / 100 + 'px');
            }
            updateScreenHeight();
            window.addEventListener('resize', updateScreenHeight);
            window.addEventListener('orientationchange', updateScreenHeight);
          `,
          }}
        />
        <style id="my-styles">
          {`
            .to-animate {
              opacity: 0;
							visibility: hidden !important;
              transition: transform .7s cubic-bezier(0.4, 0.01, 0.165, 0.99) .2s, opacity .7s cubic-bezier(0.4, 0.01, 0.165, 0.99) .2s;
            }
            .fade-up, .fadeInUp {
              transform: translate3d(0, 10px, 0);
            }
            .in-viewport, [in-viewport], .immediate[in-viewport] {
              opacity: 1 !important;
              visibility: visible !important;
              transform: translateZ(0) !important;
            }
          `}
        </style>
      </Head>
      <LoadingProgress />
      <StructuredData
        id="organization-schema"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'https://glow.team',
          logo: 'https://glow.team/favicons/ms-icon-144x144.png',
        }}
      />
      {getLayout(<Component {...pageProps} />)}
      <CookieBanner>
        {(isConsent) => (isConsent ? <Analytics /> : null)}
      </CookieBanner>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              setTimeout(function(){
                if (!window.__app_mounted) {
                  var t = document.querySelectorAll('.to-animate');
                  for (var i = 0; i < t.length; i++) {
                    var el = t[i];
                    el && el.classList && el.setAttribute('in-viewport', true);
                    window.__mobile_in_viewport = true;
                  }
                }
              }, 500);
            `,
        }}
      />
      <div id="drag-cursor"></div>
    </div>
  );
}

export default MyApp;
