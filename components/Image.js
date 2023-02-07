import Head from 'next/head';
import React, { useMemo } from 'react';

const __DEV__ = process.env.NODE_ENV === 'development';

export const resolve = ({ src, width, type }) => {
  if (__DEV__) {
    return src;
  }

  const parts = src.split('.');
  let extension = parts.pop();
  parts.push(`w-${width}`);
  if (type) {
    extension = type;
  }
  parts.push(extension);
  return parts.join('.');
};

const getExtension = (src) => {
  const p = src.split('.');
  return p[p.length - 1];
};

export const x2 = (src, width, type) => {
  return `${resolve({ src, width, type })}, ${resolve({
    src,
    width: width * 2,
    type,
  })} 2x`;
};

export function Source(props) {
  return (
    <>
      <source
        srcSet={x2(props.image.src, props.width, 'webp')}
        media={props.media}
        type="image/webp"
      />
      <source srcSet={x2(props.image.src, props.width)} media={props.media} />
    </>
  );
}

const isString = (input) => typeof input === 'string';

const defaultSizes = [[400, 768], [1140]];

export default function Image(props) {
  const [width, height] = useMemo(() => {
    if (isString(props.src)) {
      return [];
    }

    const ratio = 1140 / props.src.width;
    return [props.src.width * ratio, props.src.height * ratio];
  }, [props?.src.width, props?.src.height]);

  const sizes = props.sizes || defaultSizes;
  const sizesList = useMemo(() => {
    const media = [];

    sizes.forEach((size) => {
      const [width, screen] = size;

      const m = screen ? `(max-width: ${screen}px)` : null;

      media.push({
        media: m,
        width: width,
      });
    });

    return media;
  }, [sizes.length]);

  const ext = props.ext || null;

  if (isString(props.src)) {
    return <img {...props} />;
  }

  return (
    <>
      {props.priority ? (
        <Head>
          <link
            rel="preload"
            as="image"
            href={resolve({ src: props.src.src, width: 1140, type: ext })}
          />
        </Head>
      ) : null}
      <picture>
        {props.sources
          ? props.sources
          : sizesList.map((item, i) => (
              <React.Fragment key={i}>
                <source
                  key={i + 'orig'}
                  srcSet={x2(props.src.src, item.width, 'webp')}
                  type="image/webp"
                  media={item.media}
                />
                <source
                  key={i + 'ext'}
                  srcSet={x2(props.src.src, item.width, ext)}
                  media={item.media}
                />
              </React.Fragment>
            ))}
        <img
          alt=""
          loading="lazy"
          {...props}
          src={resolve({ src: props.src.src, width: 1140, type: ext })}
          width={width}
          height={height}
          decoding="async"
        />
      </picture>
    </>
  );
}
