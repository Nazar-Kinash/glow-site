import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import gsap, { ScrollSmoother, ScrollTrigger } from '../../dist/gsap';
import Link from 'next/link';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import { useSetAtom } from 'jotai';
import { smoothScrollAtom } from '../../atoms/scroll';
import { atom } from 'jotai';
import { useRouter } from 'next/router';
import { useMediaAtom } from '../../lib/agent';

export const ScrollSmootherMounted = atom(false);

export default function ScrollContainer({ children }) {
  const media = useMediaAtom();
  const setMounted = useSetAtom(ScrollSmootherMounted);
  const updateScrollPosition = useSetAtom(smoothScrollAtom);
  const viewportRef = useRef(null);
  const ref = useRef(null);
  const smootherRef = useRef(null);
  const isMobile = media === 'mobile';

  useEffect(() => {
    if (media === 'mobile') {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }

    smootherRef.current = new ScrollSmoother({
      wrapper: viewportRef.current,
      content: ref.current,
      effects: true,
      smoothTouch: 0.1,
      onUpdate: throttle((e) => {
        const scrollTop = Math.round(Math.abs(e.scrollTop()));
        updateScrollPosition(scrollTop);
      }, 100),
    });

    setMounted(true);

    return () => {
      setMounted(false);
      if (smootherRef.current) {
        smootherRef.current.kill();
        console.log('kill');
      }
    };
  }, [isMobile, updateScrollPosition, setMounted]);

  //scrolltrigger does not sometimes refresh when scrollsmoother is enabled
  useEffect(() => {
    if ('MutationObserver' in window) {
      let height = 0;
      const handleChange = debounce(() => {
        const newHeight = document.body.style.height;
        if (height !== newHeight) {
          ScrollTrigger.refresh();
        }
        height = newHeight;
      }, 100);

      const mo = new MutationObserver(handleChange);

      mo.observe(document.body, {
        attributeFilter: ['style'],
        attributes: true,
        childList: false,
        subtree: false,
      });

      return () => {
        mo.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (smootherRef.current) {
      window.__scrollTo = (...args) => {
        smootherRef.current.scrollTo(args);
      };

      return () => {
        delete window.__scrollTo;
      };
    }
  }, [isMobile]);

  // useEffect(() => {
  //   console.log('media changed', media);
  //   // window.globalscr = ScrollTrigger;
  //   if (media === 'mobile') {
  //     // console.log('refresh');
  //   }
  // }, [media]);

  const Wrapper = useMemo(() => {
    const key = media === 'mobile' ? 'mobile' : 'desktop';
    const wrapper = ({ children }) => <div key={key}>{children}</div>;
    wrapper.displayName = 'Wrapper';

    return wrapper;
  }, [isMobile]);

  return (
    <div ref={viewportRef}>
      <div ref={ref}>
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}
