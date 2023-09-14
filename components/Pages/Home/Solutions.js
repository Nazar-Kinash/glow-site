import Image from '../../Image';
import Layout from '../../Layout';
import RusM from '../About/assets/rus-2.png';
import StasM from '../About/assets/stas-2m.png';
import PavelM from '../About/assets/pavel-2m.png';
import cx from 'clsx';
import React from 'react';
import { useMediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';

const items = [
  {
    image: PavelM,
    tag: 'Management',
    title: <>Experience with incompetent design agencies</>,
    author_description:
      'My name is Pavel and I will help you with this problem',
    description: `Our seasoned professionals are dedicated to earning your trust. We are proud of our track record of successful projects, transparent processes, and commitment to clear communication. 
      You can also see our portfolio of client success stories and their feedback.`,
  },
  {
    image: StasM,
    tag: 'Design',
    title: (
      <>
        Customers choose
        <br className="hidden md:block" /> competitors
      </>
    ),
    author_description: 'My name is Stas and I will help you with this problem',
    description: `We investigate your potential users & problems that need to be solved.  By optimizing your product's user interface and experience, we will make it more appealing than competitors' offerings, while maintaining its depth and value.`,
  },
  {
    image: RusM,
    tag: 'Business',
    title: (
      <>
        Low business
        <br className="hidden 3xl:block" /> performance
      </>
    ),
    author_description: 'My name is  Rus and I will help you with this problem',
    description: `We help with developing a user-centric design as well as implementing usability practices for engaging experiences, thus boosting your product’s performance and customer satisfaction while reducing churn rates.`,
  },
];

function Card({
  image,
  className,
  tag,
  title,
  author_description,
  description,
  index = 0,
}) {
  return (
    <Animated delay={100 * index} className={cx(className)}>
      <div className="rounded-[32px] bg-[#F4F3F5] px-4 pb-4 pt-8 md:flex md:h-full md:flex-col md:px-6 md:pb-6 md:pt-[39px] xl:px-10 xl:pb-10 xl:pt-12 layout-no-p:px-8 layout-no-p:pb-8 layout-no-p:pt-12">
        <div>
          <span className="rounded-full bg-brand px-2 py-1 text-body-heading-s uppercase text-lred">
            {tag}
          </span>
        </div>
        <div className="mb-4 mt-6 font-glow text-[29px] font-medium leading-[37px] md:mb-[27px] md:mt-[34px] xl:mb-6 xl:text-heading-h3 3xl:text-[30px] layout-no-p:flex layout-no-p:min-h-[64px] layout-no-p:items-center">
          {title}
        </div>
        <div className="__card_block rounded-2xl bg-white p-4 pb-6 md:h-full md:pb-8 xl:p-8 xl:pb-[37px] layout-no-p:px-6 layout-no-p:pb-[50px] layout-no-p:pt-6">
          <div className="mb-6 flex xl:mb-[27px]">
            <div className="mr-4 shrink-0">
              <Image
                className="h-14 w-14 rounded-lg object-cover md:h-16 md:w-16"
                src={image}
                alt=""
              />
            </div>

            <div className="text-[17px] italic leading-[27px] opacity-50 md:text-subtitle-s xl:max-w-[352px]">
              {author_description}
            </div>
          </div>
          <div className="text-body-m2">{description}</div>
        </div>
      </div>
    </Animated>
  );
}

export default function Solutions() {
  const media = useMediaAtom();

  return (
    <Layout className="pb-8 pt-20 xl:pt-[120px] layout-no-p:pb-12 layout-no-p:pt-[145px]">
      <div className="mb-10 md:mb-16 md:grid md:grid-cols-8 md:gap-8 xl:mb-[72px] xl:grid-cols-12">
        <Animated className="mb-[21px] font-glow text-[40px] font-medium leading-[41px] tracking-[-2px] md:col-span-4 md:text-[46px] md:leading-[49px] xl:col-span-7 xl:max-w-[560px] xl:text-heading-h2-2 layout-no-p:max-w-[672px] layout-no-p:text-[64px] layout-no-p:leading-[64px]">
          We can light
          <br className="hidden md:block" /> your&nbsp;way
        </Animated>
        <div className="hidden layout-no-p:col-span-1 layout-no-p:block"></div>
        <Animated
          delay={100}
          className="text-subtitle-m italic   md:col-span-4 md:pr-8 xl:col-span-5 xl:text-subtitle-l layout-no-p:col-span-4 layout-no-p:text-[26px]"
        >
          Like a rescue squad for your product, we are ready to swoop in
          whenever you summon us. Let&apos;s take a look at what we can solve.
        </Animated>
      </div>
      <div className="grid justify-center gap-4 md:-ml-4 md:flex md:flex-wrap md:gap-0">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index === items.length - 1 && media === 'desktop' && (
              <Animated
                delay={250}
                className="w-1/4 rounded-[32px] 3xl:hidden"
                style={{
                  background:
                    'linear-gradient(287deg, rgb(244 243 245) 0%, rgb(244 243 245) 30%, rgba(255, 255, 255, 0) 70%)',
                }}
              ></Animated>
            )}
            <Card
              index={index}
              image={item.image}
              className={cx('md:mb-4 md:w-1/2 md:pl-4 3xl:w-1/3', {
                'md:w-1/2': index !== items.length - 1,
                'md:w-1/2 md:pr-4': index === items.length - 1,
              })}
              tag={item.tag}
              title={item.title}
              author_description={item.author_description}
              description={item.description}
            />

            {index === items.length - 1 && media === 'desktop' && (
              <Animated
                delay={350}
                className="w-1/4 rounded-[32px] opacity-70 3xl:hidden"
                style={{
                  background:
                    'linear-gradient(107deg, rgb(244 243 245) 0%, rgb(244 243 245) 30%, rgba(255, 255, 255, 0) 70%)',
                }}
              ></Animated>
            )}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
}
