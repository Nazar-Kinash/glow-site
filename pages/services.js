import cx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';
import IntroSection2 from '../components/IntroSection2';
import Layout from '../components/Layout';
import Logos from '../components/Pages/About/Logos';
import { CasesSlider2 } from '../components/Pages/Home/CasesSlider';
import OurExperience from '../components/Pages/Home/OurExperience';
import Reviews from '../components/Pages/Home/Reviews2';
import TrialBanner from '../components/Pages/Home/TrialBanner';
import Approach from '../components/Pages/Services/Approach';
import Process from '../components/Pages/Services/Process';
import ServicesSelector from '../components/Pages/Services/ServiceSelector';
import { useMediaAtom } from '../lib/agent';
import { FAQ } from './contact-us';
import Head from 'next/head';
import { getFullTitle } from '../components/HeadTitle';

function Heading() {
  const media = useMediaAtom();

  const title = useMemo(() => {
    if (media === 'mobile') {
      return (
        <>
          Glow Processes
          <br /> For Mvp Projects
        </>
      );
    }

    return (
      <>
        Glow design process
        <br className="hidden xl:block" /> &{' '}
        <span className="hidden xl:inline">&nbsp;</span>the list of our services
      </>
    );
  }, [media]);

  return (
    <IntroSection2
      className="!pt-[196px] md:!pt-[271px] xl:!pt-[300px]"
      title={title}
      subtitle="We put Human Centered Design in the core of our work to provide solutions that satisfy both business and users."
    />
  );
}

function Box({ className, children }) {
  return (
    <div className={cx('py-[52px] md:py-[72px] xl:py-[88px]', className)}>
      {children}
    </div>
  );
}

function Slider() {
  const media = useMediaAtom();
  const filter = media === 'mobile' ? ['/beast', '/cryptogenie'] : [];

  return (
    <div>
      <Layout className="mb-10 text-center md:hidden">
        <h3 className="mb-4 text-[20px] font-medium leading-[120%]">
          MVP Cases
        </h3>
        <h4 className="text-[18px] leading-[24px]">
          How we do it. Check out how we make ideas glow click-by-click.
        </h4>
      </Layout>
      <CasesSlider2 filter={filter} disableOnMobile padding={false} />
      <Layout className="md:hidden">
        <Link
          href="/work"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-black px-8 py-[15px] text-[16px] uppercase leading-[24px]"
        >
          <div>Cases</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4335 8.7381L6.63137 18.5402L5.5 17.4088L15.3036 7.60527L7.90151 7.62145L7.89811 6.02177L18.0388 6L18.0177 16.1414L16.418 16.138L16.4335 8.7381Z"
              fill="#19191B"
            />
          </svg>
        </Link>
      </Layout>
    </div>
  );
}

export default function Services() {
  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
      <Head>
        <title>{'Glow design process & the list of our services'}</title>
        <meta
          name="description"
          content="We put Human Centered Design in the core of our work to provide solutions that satisfy both business and users."
        ></meta>
      </Head>
      <Heading />
      <ServicesSelector />
      <Process />
      <Box>
        <OurExperience padding={false} />
      </Box>
      <Box>
        <Slider />
      </Box>

      <Box>
        <Approach />
      </Box>
      <Box className="grid gap-16 xl:gap-[120px]">
        <Layout>
          <TrialBanner />
        </Layout>
        <Logos padding={false} />
      </Box>
      <Box>
        <Reviews padding={false} />
      </Box>
      <Box>
        <Layout>
          <FAQ padding={false} />
        </Layout>
      </Box>
    </div>
  );
}
