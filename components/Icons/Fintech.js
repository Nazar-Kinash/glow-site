import { useMemo, useRef, useState } from 'react';
import cx from 'clsx';

export default function Fintech({ isReady = true }) {
  const [circlesConfig, setCirclesConfig] = useState({
    2: {
      delay: '1.3s',
    },
    3: {
      delay: '1.3s',
    },
    8: {
      delay: '1.3s',
    },
  });
  const [circles, setCircles] = useState({});
  const [paths, setPaths] = useState(() => ({}));

  const updatePath = (id) => {
    setPaths((p) => ({
      ...p,
      [id]: true,
    }));
  };

  const updateCircle = (id) => {
    setCircles((c) => ({
      ...c,
      [id]: true,
    }));
  };

  const ref = useRef({});

  const circleProps = (id, target = 'circle') => {
    if (!ref.current[id]) {
      ref.current[id] = 0;
    }

    const t = target === 'circle' ? circles : paths;
    let isActive = t[id - 1] && isReady;
    if (circlesConfig[id] && !circlesConfig[id]?.run) {
      isActive = ref.current[id] > 0 ? true : false;
      isActive = isActive && isReady;
      ref.current[id] += 1;
    }
    return {
      style: {
        '--anim-delay': circlesConfig[id]?.delay || 0,
      },
      className: cx('svg-circle', isActive && 'active'),
      onTransitionEnd: () => updateCircle(id),
    };
  };

  const pathProps = (id, options = {}) => {
    const dep = options.dep || null;
    let className = cx('svg-line-anim', isReady && 'ready');

    if (dep !== null && !circles[dep]) {
      className = 'svg-line-anim';
    }
    const k = options.key || 100;
    return {
      className,
      style: {
        '--dash-array': options.array || k,
        '--dash-offset': options.offset || k * 1.25,
        '--dash-to': options.to || k * 2,
        '--anim-delay': options.delay || 0,
      },
      onAnimationEnd: () => {
        updatePath(id);
      },
    };
  };

  return (
    <svg
      width="126"
      height="120"
      viewBox="0 0 126 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <path
        d="M3 80V61C3 45.087 9.32142 29.8258 20.5736 18.5736C31.8258 7.32141 47.087 0.999999 63 1C78.913 1 94.1742 7.32141 105.426 18.5736C116.679 29.8258 123 45.087 123 61V79.5"
        stroke="#E4E4E4"
      />
      <path
        d="M63 1C47.087 0.999999 31.8258 7.32141 20.5736 18.5736C9.32142 29.8258 3 45.087 3 61V80"
        stroke="black"
        {...pathProps(1, {
          duration: '3s',
          key: 300,
        })}
        // className="svg-line-anim"
        // style={{
        //   '--dash-array': 300,
        //   '--dash-offset': 480,
        //   '--dash-to': 600,
        //   '--anim-duration': '3s',
        // }}
        onAnimationStart={() => {
          setTimeout(() => {
            updateCircle(0);
          }, 200);
        }}
      />
      <path
        d="M18 79.5V76.5C18 75.5151 17.806 74.5398 17.4291 73.6299C17.0522 72.7199 16.4997 71.8931 15.8033 71.1967C15.1069 70.5003 14.2801 69.9478 13.3701 69.5709C12.4602 69.194 11.4849 69 10.5 69C9.51509 69 8.53982 69.194 7.62987 69.5709C6.71993 69.9478 5.89314 70.5003 5.1967 71.1967C4.50026 71.8931 3.94781 72.7199 3.5709 73.6299C3.19399 74.5398 3 75.5151 3 76.5L3 79.5"
        stroke="#E4E4E4"
      />
      <path
        d="M18 79.5V76.5C18 75.5151 17.806 74.5398 17.4291 73.6299C17.0522 72.7199 16.4997 71.8931 15.8033 71.1967C15.1069 70.5003 14.2801 69.9478 13.3701 69.5709C12.4602 69.194 11.4849 69 10.5 69C9.51509 69 8.53982 69.194 7.62987 69.5709C6.71993 69.9478 5.89314 70.5003 5.1967 71.1967C4.50026 71.8931 3.94781 72.7199 3.5709 73.6299C3.19399 74.5398 3 75.5151 3 76.5L3 79.5"
        className="svg-line-anim"
        {...pathProps(2, {
          duration: '1.8s',
          key: 300,
        })}
        stroke="black"
      />
      <path
        d="M33 80V76C33 72.0218 31.4196 68.2064 28.6066 65.3934C25.7936 62.5804 21.9782 61 18 61C14.0218 61 10.2064 62.5804 7.3934 65.3934C4.58035 68.2064 3 72.0218 3 76V80"
        stroke="#E4E4E4"
      />
      <path
        d="M33 80V76C33 72.0218 31.4196 68.2064 28.6066 65.3934C25.7936 62.5804 21.9782 61 18 61C14.0218 61 10.2064 62.5804 7.3934 65.3934C4.58035 68.2064 3 72.0218 3 76V80"
        className="svg-line-anim"
        {...pathProps(2, {
          key: 300,
        })}
        stroke="black"
      />
      <path
        d="M108 80V76C108 72.0218 106.42 68.2064 103.607 65.3934C100.794 62.5804 96.9782 61 93 61C89.0218 61 85.2064 62.5804 82.3934 65.3934C79.5804 68.2064 78 72.0218 78 76V80"
        stroke="#E4E4E4"
      />
      <path
        d="M108 79.5V76.5C108 75.5151 107.806 74.5398 107.429 73.6299C107.052 72.7199 106.5 71.8931 105.803 71.1967C105.107 70.5003 104.28 69.9478 103.37 69.5709C102.46 69.194 101.485 69 100.5 69C99.5151 69 98.5398 69.194 97.6299 69.5709C96.7199 69.9478 95.8931 70.5003 95.1967 71.1967C94.5003 71.8931 93.9478 72.7199 93.5709 73.6299C93.194 74.5398 93 75.5151 93 76.5L93 79.5"
        {...pathProps(7)}
        stroke="#010101"
        onAnimationStart={() => {
          setTimeout(() => {
            updateCircle(6);
          }, 200);
        }}
      />
      <path
        d="M63 80V84C63 87.9782 61.4196 91.7936 58.6066 94.6066C55.7936 97.4196 51.9782 99 48 99C44.0218 99 40.2064 97.4196 37.3934 94.6066C34.5804 91.7936 33 87.9782 33 84V80"
        stroke="#E4E4E4"
      />
      <path
        d="M37.3934 94.6067C34.5804 91.7936 33 87.9783 33 84.0001V80.0001"
        stroke="black"
        {...pathProps(3, { dep: null, delay: '0.7s' })}
      />
      <path
        d="M48 80V71.5C48 65.5326 45.6295 59.8097 41.4099 55.5901C37.1903 51.3705 31.4674 49 25.5 49C19.5326 49 13.8097 51.3705 9.5901 55.5901C5.37053 59.8097 3 65.5326 3 71.5V80"
        stroke="#E4E4E4"
      />
      <path
        d="M9.5901 55.5901C5.37053 59.8097 3 65.5326 3 71.5V80"
        {...pathProps(4)}
        className={cx('svg-line-anim', isReady && 'ready')}
        stroke="#19191B"
      />
      <path
        d="M3 63.5C3 58.5754 3.96997 53.6991 5.85452 49.1494C7.73907 44.5997 10.5013 40.4657 13.9835 36.9835C17.4657 33.5013 21.5997 30.7391 26.1494 28.8545C30.6991 26.97 35.5754 26 40.5 26C45.4246 26 50.3009 26.97 54.8506 28.8545C59.4003 30.7391 63.5343 33.5013 67.0165 36.9835C70.4987 40.4657 73.2609 44.5997 75.1455 49.1494C77.03 53.6991 78 58.5754 78 63.5V80.5"
        stroke="#E4E4E4"
      />
      <path
        d="M93 61C89.0218 61 85.2064 62.5804 82.3934 65.3934C79.5804 68.2064 78 72.0218 78 76V80"
        stroke="black"
        {...pathProps(6)}
        onAnimationStart={() => {
          setTimeout(() => {
            updateCircle(5);
          }, 200);
        }}
      />
      <path
        d="M75.1455 49.1494C73.2609 44.5997 70.4987 40.4657 67.0165 36.9835C63.5343 33.5013 59.4003 30.7391 54.8506 28.8545C50.3009 26.97 45.4246 26 40.5 26C35.5754 26 30.6991 26.97 26.1494 28.8545C21.5997 30.7391 17.4657 33.5013 13.9835 36.9835C10.5013 40.4657 7.73907 44.5997 5.85452 49.1494C3.96997 53.6991 3 58.5754 3 63.5"
        {...pathProps(6, {
          key: 300,
        })}
        stroke="black"
      />
      <path
        d="M18 82C18 86.9246 18.97 91.8009 20.8545 96.3506C22.7391 100.9 25.5013 105.034 28.9835 108.517C32.4657 111.999 36.5997 114.761 41.1494 116.645C45.6991 118.53 50.5754 119.5 55.5 119.5C60.4246 119.5 65.3009 118.53 69.8506 116.645C74.4003 114.761 78.5343 111.999 82.0165 108.516C85.4987 105.034 88.2609 100.9 90.1455 96.3506C92.03 91.8009 93 86.9246 93 82L93 80"
        stroke="#E4E4E4"
      />
      <path
        d="M69.8506 116.645C65.3009 118.53 60.4246 119.5 55.5 119.5C50.5754 119.5 45.6991 118.53 41.1494 116.645C36.5997 114.761 32.4657 111.999 28.9835 108.517C25.5013 105.034 22.7391 100.9 20.8545 96.3506C18.97 91.8009 18 86.9246 18 82"
        {...pathProps(3, {
          dep: 2,
          array: 100,
          offset: 100 * 1.25,
          to: 100 * 2,
          duration: '1s',
        })}
        stroke="black"
      />
      <circle cx="93" cy="80.0864" r="3" fill="black" {...circleProps(7)} />
      <circle
        cx="48"
        cy="80.0864"
        r="3"
        fill="currentColor"
        {...circleProps(4)}
      />
      <circle cx="3" cy="80.0864" r="3" fill="black" {...circleProps(1)} />
      <circle cx="108" cy="80.0864" r="3" fill="black" {...circleProps(8)} />
      <circle
        cx="63"
        cy="80.0864"
        r="3"
        fill="currentColor"
        className={cx('svg-circle', {
          active: circles[4] === true,
        })}
        onTransitionEnd={() => updateCircle(5)}
      />
      <circle
        cx="18"
        cy="80.0864"
        r="3"
        fill="currentColor"
        {...circleProps(2, 'path')}
      />
      <circle cx="123" cy="80.0864" r="3" fill="black" {...circleProps(9)} />
      <circle
        cx="78"
        cy="80.0864"
        r="3"
        fill="currentColor"
        {...circleProps(6)}
        // {...circleProps(6)}
        // className={cx('svg-circle', paths[5] && 'active')}
        // onTransitionEnd={() => updateCircle(6)}
      />
      <circle
        cx="33"
        cy="80.0864"
        r="3"
        fill="currentColor"
        {...circleProps(3)}
      />
    </svg>
  );
}
