import cx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useIsClient } from '../lib/utils';
import Button2 from './Button';
import FooterLinks from './Footer/FooterLinks';
import FooterFormWrapper from './FooterFormWrapper';
import Image, { Source, resolve } from './Image';
import Layout from './Layout';
import GlwEffectM from './Pages/Home/assets/glw-eff-m.png';
import GlwEffect from './Pages/Home/assets/glw-eff.png';
import FormBG from './Pages/Home/assets/form-bg.png';

function SlotText() {
  const isClient = useIsClient();
  const [month] = useState(() => {
    const date = new Date();
    const month = date.toLocaleString('en', { month: 'long' });

    return month;
  });

  if (!isClient) return null;

  return (
    <span className="glow-border-light mx-auto block min-h-[28px] w-fit rounded-full px-[12px] py-[2px]">
      2 slots available in {month}
    </span>
  );
}

export default function Footer2({
  footerSuccess: isSubmitted,
  footerStyle = 'default',
  hideToggles = false,
  showForm = true,
}) {
  const router = useRouter();

  const setIsSubmitted = useCallback(() => {
    const u = footerStyle === 'trial' ? '/form-success3' : 'form-success';

    router.push(u);
  }, [router, footerStyle]);

  return (
    <footer
      id="footer"
      className={cx('md:mt-[144px]', {
        '!mt-0 flex h-screenx flex-col !pt-[120px] font-inter': isSubmitted,
      })}
    >
      {isSubmitted ? (
        <FooterFormWrapper isSubmitted={isSubmitted} />
      ) : (
        showForm && (
          <Layout disableOnMobile={true}>
            <div className="text-inter relative overflow-hidden bg-black px-4 py-[126px] md:rounded-[32px] md:py-[126px] xl:py-[142px] xl:pb-[128px] xl:pt-[131px]">
              <Image
                src={FormBG}
                alt=""
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              />
              {/* <picture>
                <Source
                  image={GlwEffect}
                  width="1280"
                  media="(min-width: 820px)"
                />
                <Source image={GlwEffectM} width="480" />

                <img
                  className="absolute inset-0 z-0 h-full w-full"
                  src={resolve({ src: GlwEffect.src })}
                  alt=""
                />
              </picture> */}
              <div className="relative z-[1] text-center">
                <div className="mb-6 text-button-m2 uppercase text-white md:mb-8 md:text-[12px] md:leading-[24px]">
                  <SlotText />
                </div>
                <div className="mb-4 text-center font-satoshi text-heading-h3 font-medium text-white md:mb-6 md:text-[56px] md:leading-[64px] xl:text-[72px] xl:leading-[72px]">
                  Let’s make
                  <br /> your project glow
                </div>
                <div className="mb-10 text-body-xs text-white md:mb-8 md:text-[16px] md:leading-[24px] xl:text-[18px]">
                  Our team will get back to you
                  <br className="md:hidden" /> within 24 hours 🙌
                </div>
                <div className=" text-center">
                  <Button2
                    // color="white"
                    as={Link}
                    href="/contact-us"
                    className="!bg-white !px-4 !py-2 !text-black"
                  >
                    Book a free call
                  </Button2>
                </div>
              </div>
            </div>
          </Layout>
        )
      )}
      <Layout>
        <div className="py-6 md:py-11">
          <FooterLinks className="!text-black" />
        </div>
      </Layout>
    </footer>
  );
}
