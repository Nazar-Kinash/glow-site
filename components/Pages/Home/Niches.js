import cx from 'clsx';
import Link from 'next/link';
import Animated from '../../Animated';
import Layout from '../../Layout';
import LinkArrowCircle from '../../LinkArrowCircle';
import Section from '../../Section';
import NichesAnimation from './NichesAnimation';
import Transportation, { Transportation2 } from '../../Icons/Transportation';
import Fintech from '../../Icons/Fintech';
import Healthcare from '../../Icons/Healthcare';
import { useState } from 'react';
import cases from '../Cases/data';
import { useSetAtom } from 'jotai';
import { filterAtom } from '../Work';

const items = [
  {
    id: 'transportation',
    title: 'Transportation',
    count: cases.filter((c) => c.category.includes('transportation')).length,
    description:
      'Be it a carsharing app or an internal service for a logistics company – the key to happy users is in comfortable UX that is easy to navigate.',
    icon: Transportation2,
    href: '#',
  },
  {
    id: 'fintech',
    title: 'Fintech',
    count: cases.filter((c) => c.category.includes('fintech')).length,
    description:
      'Who said that fintech must be dull? This is an important and well organized field but not everything connected to finances should resemble a spreadsheet.',
    icon: Fintech,
    href: '#',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    count: cases.filter((c) => c.category.includes('healthcare')).length,
    description:
      'The users of a healthcare service may not be that good with modern technology so the UX must be as user friendly as possible.',
    icon: Healthcare,
    href: '#',
  },
];

function Badge({ children, className = '' }) {
  const padding = children > 9 ? 'px-[6.5px]' : 'px-[8.5px]';

  return (
    <div
      className={cx(
        'rounded-full bg-brand text-xs leading-[18px] text-white',
        padding,
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Niches() {
  const setFilter = useSetAtom(filterAtom);
  const [iconMap, setIconMap] = useState({});

  return (
    <Section withLayout={false}>
      <Layout>
        <Section.Header className="py-[64px] md:pt-[107px] xl:pt-[160px]">
          <Section.Title>
            Niches <br />
            that we&nbsp;fit
          </Section.Title>
          <Section.Description>
            Experience matters. Over the years we dived into the nuances of a
            number of industries and we will be happy to make a design that
            works for your project specifically.
          </Section.Description>
        </Section.Header>
      </Layout>
      <NichesAnimation />
      <Layout className="pb-16 md:mt-[120px]">
        <ul className="divide-y divide-black md:pb-[12px] xl:pb-[32px]">
          {items.map((item, i) => (
            <Animated
              as="li"
              key={i}
              className="pb-10 pt-12 md:pb-[56px] md:pt-[72px] xl:pb-[72px]"
            >
              <Link
                href="/work"
                className="group block first:pt-0 md:flex md:items-center md:justify-between"
                onClick={() => {
                  setFilter((f) => ({
                    ...f,
                    category: item.id,
                  }));
                }}
              >
                <Animated
                  className="md:w-full md:max-w-[25%]"
                  onViewChange={(inView) => {
                    setIconMap((map) => ({
                      ...map,
                      [i]: inView,
                    }));
                  }}
                >
                  {!!item.icon ? (
                    <item.icon isReady={iconMap[i] === true} />
                  ) : (
                    <svg
                      width="80"
                      height="76"
                      viewBox="0 0 80 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M80 34.3858L51.9231 42.6981L69.6154 65.9349L56.9231 75.0029L40 51.5772L23.0769 75.0029L10.1923 65.9349L27.8846 42.6981L4.07853e-06 34.3858L4.8077 19.6503L32.5 28.9072L32.1154 0.00292624L47.8846 0.00292487L47.5 28.7183L75.1923 19.6503L80 34.3858Z"
                        fill="url(#paint0_linear_2113_604)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2113_604"
                          x1="26.9812"
                          y1="-118.075"
                          x2="51.1291"
                          y2="75.0263"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#19191B" />
                          <stop
                            offset="1"
                            stopColor="#19191B"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </Animated>
                <Animated
                  delay={100}
                  className="mb-4 flex items-center text-xl font-medium leading-[30px] md:mt-[12px] md:w-full md:max-w-[25%] md:items-start xl:mt-[20px]"
                >
                  <span className="pt-5">{item.title}</span>
                  <Badge className="ml-2">{item.count}</Badge>
                </Animated>
                <Animated
                  delay={200}
                  className="text-base leading-[22px] md:w-full md:max-w-[25%]"
                >
                  {item.description}
                </Animated>
                <Animated
                  delay={300}
                  className="hidden transition-colors md:block"
                >
                  <LinkArrowCircle />
                </Animated>
              </Link>
            </Animated>
          ))}
        </ul>
      </Layout>
    </Section>
  );
}
