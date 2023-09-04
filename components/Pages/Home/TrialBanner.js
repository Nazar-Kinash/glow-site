import Image from '../../Image';
import Layout from '../../Layout';
import Logo from './assets/trial-logo.png';
import Bg from './assets/trial-bg.png';
import BgTablet from './assets/trial-bg-tb.png';
import { useEffect, useRef } from 'react';
import gsap, { ScrollTrigger } from '../../../dist/gsap';
import Link from 'next/link';
import RollingText from '../../RollingText';

export default function TrialBanner() {
  const wrapperRef = useRef();
  const targetRef = useRef();

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targetRef.current,
        { y: 140 },
        {
          y: -50,
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub: true,
            start: 'top 100%',
            end: 'bottom 0%',
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Layout className="pb-20 xl:pb-[120px]">
      <Link href="/trial">
        <div
          ref={wrapperRef}
          className="relative overflow-hidden rounded-3xl px-6 py-10 md:flex md:min-h-[328px] md:px-12"
        >
          <div className="absolute inset-0 md:hidden">
            <Image className="h-full w-full object-cover" src={Bg} alt="" />
          </div>
          <Image
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            src={BgTablet}
            alt=""
          />
          <div
            ref={targetRef}
            className="absolute bottom-0 left-[-6rem] right-[-5.5rem] top-[-14%] md:left-[9%] md:right-[-25%] md:top-[-114%] xl:top-[-120%]"
          >
            <Image src={Logo} alt="" />
          </div>
          <div className="relative flex w-full items-center">
            <div className="w-full items-center justify-between md:flex md:h-full">
              <div className="mb-3 pt-[138px] font-glow text-[46px] font-medium leading-[49px] tracking-[-2px] text-white md:mb-0 md:max-w-[307px] md:pt-0 xl:text-heading-h2">
                Glow Trial Phase
              </div>
              <div className="md:max-w-[413px] md:self-end md:pb-4 md:pr-10 xl:max-w-[450px]">
                <div className="mb-[41px] text-xl italic leading-[27px] text-lblue opacity-50 md:mb-8 md:text-subtitle-l">
                  Check out how we make ideas glow click-by-click.
                </div>
                <button
                  tabIndex="-1"
                  className="rolling-text-group flex w-full justify-center overflow-hidden whitespace-pre-wrap rounded-full bg-brand py-4 text-xs font-medium uppercase leading-4 tracking-[0.36px] text-lred md:w-fit md:px-[34px] xl:text-sm xl:tracking-[0.42px]"
                >
                  <RollingText height={19} text="Free 3 day’s trial" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Layout>
  );
}
