import { RollingWords } from './index';
// import Layout2 from '../../Layout2';
import PageHeading, { PageHeading2 } from '../../PageHeading';
import Subheading, { Subheading2 } from '../../Typography/Subheading';
import NextStep from './NextStep';
import OurExperience from './OurExperience';
import TrialBanner from './TrialBanner';
import Services from './Services';
import Solutions from './Solutions';
import Reviews from './Reviews2';
import CasesSlider, { CasesSlider2 } from './CasesSlider';
import LogoCarousel from './LogoCarousel';
import BgImage from './assets/bg.png';
import BgImageTablet from './assets/bg-tablet.png';
import { Layout2 } from '../../Layout';

function IntroSection() {
  return (
    <div>
      <Layout2 className="flex flex-col">
        <Subheading2 className="mb-8 pt-48 md:mb-[87px] md:ml-auto md:mr-8 md:pt-[240px] xl:pt-[272px]">
          Your trusted design team for
          <br />
          <RollingWords
            words={['transportation', 'ai', 'fintech']}
            interval={2200}
          />{' '}
          <div className="inline-flex">challenges.</div>
        </Subheading2>
        <PageHeading2 className="mb-8 md:mb-16">
          Simple design
          <br /> for&nbsp;complex products
        </PageHeading2>
      </Layout2>
    </div>
  );
}

const items = [
  {
    title: 'SaaS Design talent',
    description: 'For full-time engagements',
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="60"
          viewBox="0 0 64 60"
          fill="none"
        >
          <circle cx="56" cy="7.99995" r="7.99995" fill="#19191B" />
          <circle cx="27.8436" cy="35.9999" r="23.4999" stroke="#DADADA" />
          <path
            d="M31.8109 30.2339C37.2401 33.9712 41.6652 38.0316 44.4342 41.5624C45.8206 43.3303 46.7735 44.9423 47.2398 46.2966C47.7101 47.6625 47.6539 48.6635 47.199 49.3244C46.744 49.9854 45.829 50.3952 44.3853 50.4435C42.9537 50.4914 41.1077 50.1768 38.9614 49.5129C34.6747 48.187 29.3021 45.5031 23.8728 41.7658C18.4436 38.0286 14.0184 33.9681 11.2495 30.4373C9.86311 28.6694 8.9102 27.0574 8.44387 25.7031C7.97358 24.3372 8.02973 23.3362 8.4847 22.6753C8.93967 22.0143 9.85466 21.6045 11.2984 21.5562C12.7299 21.5083 14.576 21.8229 16.7223 22.4868C21.0089 23.8127 26.3816 26.4966 31.8109 30.2339Z"
            stroke="#DADADA"
          />
          <path
            d="M50.5429 29.9176C51.1316 32.1146 51.1394 34.4501 50.5587 36.7943C49.9778 39.1397 48.8184 41.4508 47.1369 43.5929C45.4554 45.7352 43.2871 47.6632 40.7524 49.263C38.2179 50.8626 35.3705 52.1002 32.3731 52.9034C29.3757 53.7065 26.291 54.0584 23.2962 53.9403C20.3013 53.8223 17.4595 53.2367 14.9321 52.2222C12.4048 51.2078 10.2451 49.786 8.5694 48.0454C6.89444 46.3055 5.7334 44.279 5.14471 42.082"
            stroke="#DADADA"
          />
          <path
            d="M27.7489 12.5002C29.6361 12.5002 31.518 13.1107 33.2853 14.3172C35.0551 15.5254 36.6733 17.3071 38.0337 19.5718C39.3938 21.8358 40.4628 24.5272 41.1713 27.4882C41.8796 30.4487 42.2116 33.6118 42.146 36.7881C42.0803 39.9644 41.6184 43.0839 40.79 45.96C39.9613 48.8366 38.7849 51.404 37.3373 53.5131C35.8895 55.6226 34.2063 57.2216 32.3977 58.2336C30.5924 59.2439 28.6946 59.6518 26.8112 59.4497"
            stroke="#DADADA"
          />
        </svg>
      );
    },
  },
  {
    title: 'Faster',
    description: 'That recruiting in-house',
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle cx="30" cy="30" r="8" fill="#19191B" />
          <circle cx="52" cy="8" r="7.5" stroke="#DADADA" />
          <circle cx="8" cy="30" r="7.5" stroke="#DADADA" />
          <circle cx="8" cy="52" r="7.5" stroke="#DADADA" />
          <path
            d="M19 52.5H30M52 19V46.5C52 49.8137 49.3137 52.5 46 52.5H30M30 41.5V52.5"
            stroke="black"
          />
        </svg>
      );
    },
  },
  {
    title: 'Top notch design',
    description: 'Quality and timely delivery',
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="60"
          viewBox="0 0 64 60"
          fill="none"
        >
          <g clipPath="url(#clip0_5043_10377)">
            <path
              d="M15 15C13.0302 15 11.0796 15.388 9.25975 16.1418C7.43986 16.8956 5.78628 18.0005 4.3934 19.3934C3.00052 20.7863 1.89563 22.4399 1.14181 24.2598C0.387985 26.0796 -8.27879e-07 28.0302 -6.55671e-07 30C-4.83463e-07 31.9698 0.387986 33.9204 1.14181 35.7403C1.89563 37.5601 3.00052 39.2137 4.3934 40.6066C5.78628 41.9995 7.43987 43.1044 9.25975 43.8582C11.0796 44.612 13.0302 45 15 45L15 30L15 15Z"
              fill="#19191B"
            />
            <path
              d="M47.5 44.5C45.5958 44.5 43.7103 44.1249 41.9511 43.3963C40.1919 42.6676 38.5934 41.5995 37.247 40.253C35.9005 38.9066 34.8324 37.3081 34.1037 35.5489C33.3751 33.7897 33 31.9042 33 30C33 28.0958 33.3751 26.2103 34.1037 24.4511C34.8324 22.6919 35.9005 21.0934 37.247 19.7469C38.5934 18.4005 40.1919 17.3324 41.9511 16.6037C43.7103 15.8751 45.5958 15.5 47.5 15.5"
              stroke="#DADADA"
            />
            <path
              d="M17.2683 15.6785C20.6783 16.2186 23.7837 17.9577 26.0259 20.583C28.2681 23.2083 29.5 26.5475 29.5 30C29.5 33.4525 28.2681 36.7917 26.0259 39.417C23.7837 42.0423 20.6783 43.7814 17.2683 44.3215"
              stroke="#DADADA"
            />
            <path d="M15 58L15 2" stroke="#19191B" />
            <path d="M33 30L54 30" stroke="#DADADA" />
            <circle
              cx="27"
              cy="56"
              r="3.5"
              transform="rotate(-90 27 56)"
              stroke="#DADADA"
            />
            <circle
              cx="27"
              cy="4"
              r="3.5"
              transform="rotate(-90 27 4)"
              stroke="#DADADA"
            />
          </g>
          <defs>
            <clipPath id="clip0_5043_10377">
              <rect
                width="60"
                height="64"
                fill="white"
                transform="translate(0 60) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  {
    title: '3-day free trial',
    description: 'and fixed monthly rate',
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <circle cx="28" cy="28" r="27.5" stroke="#DADADA" />
          <circle cx="27.998" cy="28" r="14.2636" stroke="#19191B" />
          <path d="M35.5625 20.4404L20.4433 35.5597" stroke="#19191B" />
          <circle cx="27.9997" cy="28" r="6.10909" fill="#19191B" />
          <circle cx="27.999" cy="28" r="20.8818" stroke="#DADADA" />
        </svg>
      );
    },
  },
];
function IconsSection() {
  return (
    <div className="pb-5">
      <Layout2>
        <div className="grid gap-10 md:grid-cols-3 xl:flex xl:justify-between xl:gap-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex md:last:col-span-3 md:last:mx-auto xl:last:mx-0"
            >
              <div className="mr-6">
                <item.icon></item.icon>
              </div>
              <div>
                <div className="mb-2 text-body-heading-m">{item.title}</div>
                <div className="text-body-s opacity-50">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Layout2>
    </div>
  );
}

function Bg() {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 top-0 z-[-1] h-screen"
      style={
        {
          // boxShadow: 'inset 0 0 0 21px red',
        }
      }
    >
      <picture>
        <source srcSet={BgImageTablet.src} media="(min-width: 820px)" />
        <source srcSet={BgImage.src} />
        <img src={BgImageTablet.src} alt="" className="w-full" />
      </picture>
    </div>
  );
}

export default function Home2() {
  return (
    <div className="relative">
      <Bg />
      <IntroSection />
      <LogoCarousel />
      <CasesSlider2 />
      <IconsSection />
      <NextStep />
      <OurExperience />
      <TrialBanner />
      <Services />
      <Solutions />
      <Reviews />
    </div>
  );
}
