import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaAtom } from '../../../lib/agent';
import DragCursorContainer from '../../DragCursor';
import Layout from '../../Layout';
import SliderProgress from '../../SliderProgress';
import casesData from '../Cases/data';
import { ClutchRating } from './_Reviews';
import { Mousewheel } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';

const reviews = [
  {
    avatar: '/reviews/r_3.png',
    companyAvatar: '/reviews/rc_3.svg',
    name: 'Micha Mazaheri',
    company: 'Co-Founder, Electric Beast O\u00dc',
    company_id: '/beast',
    text: (
      <>
        Glow Design Agency designed an app for a&nbsp;self-service car rental
        app. They provided a&nbsp;competitor&apos;s analysis, wireframes, and UI
        concepts for all screens. During the final stages, they presented
        a&nbsp;prototype.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_2.png?v=1',
    companyAvatar: '/reviews/rc_2.svg',
    name: 'Vitaly Babiy',
    company: 'Founder, FleetChaser',
    company_id: '/fleet',
    text: (
      <>
        Glow Design Agency offered frontend design services to a&nbsp;GPS
        tracking software company to elevate and unify the existing site. They
        continue to assist with design needs on an ad hoc&nbsp;basis.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_1.png',
    companyAvatar: '/reviews/rc_1.svg',
    name: 'Eric Zellhart',
    company: 'VP Product, LiquidSpace',
    company_id: '/liquidspace',

    text: (
      <>
        Glow Design provided UI/UX design for a&nbsp;office space provider and
        has since expanded their role to include design updates for the
        site&apos;s front- and backend as well as social media visuals and
        animations.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_10.png',
    companyAvatar: '/reviews/rc_10.svg',
    name: 'Max Grollmann',
    company: 'Managing Director',
    company_id: '/jucr',
    text: (
      <>
        Glow Design Agency provided UI and UX design services for e-cars
        charging market company. They were tasked with designing the UX and UI
        of the app&apos;s prototype.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_5.png',
    companyAvatar: '/reviews/rc_5.svg',
    name: 'Jon Fry',
    company: 'Founder, FinTech Company',
    company_id: 'landflow',
    text: (
      <>
        The team was organized and communicative throughout the process,
        breaking down complex industry concepts and translating them into
        a&nbsp;sleek and useable UI.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_6.png',
    companyAvatar: '/reviews/rc_6.svg',
    name: 'Scott Kuchinski',
    company: 'Product Manager, IT Company',
    company_id: '/ethos',
    text: (
      <>
        Glow Design Agency handled frontend development for a&nbsp;learning
        management system company. They provided several UI design options for
        implementation into the client&apos;s web application.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_7.png',
    companyAvatar: '/reviews/rc_7.svg',
    name: 'Vinicius Rodrigues',
    company: 'CTO, E-Commerce Platform',
    company_id: 'chatfood',
    text: (
      <>
        Glow was hired by an e-commerce platform for their UI/UX design
        services. They redesigned website and provided support. After the new
        website was launched, the client saw a significant increase in
        conversions.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_9.png?v=1',
    companyAvatar: '/reviews/rc_9.svg',
    name: 'Jacob Berg',
    company: 'CTO, Social Curator',
    company_id: 'sc',
    text: (
      <>
        Glow provides ongoing web design for a social media services firm. The
        team provided layout prototypes, an admin dashboard. The team
        communicated effectively despite having different timezones.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_8.png',
    companyAvatar: '/reviews/rc_8.svg',
    name: 'Sinthuja Nagalingam',
    company: 'CEO at Tilt',
    company_id: '/tilt',
    text: (
      <>
        An online education company hired Glow Design Agency to create the
        designs for a new website and the first version of its platform. The
        team was responsive to feedback, which was a significant part of why
        they quickly moved forward.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_4.png',
    companyAvatar: '/reviews/rc_4.svg',
    name: 'Tim Bogza',
    company: 'CEO & Founder, Digital Agency',
    company_id: 'bogza',
    text: (
      <>
        Glow Design Agency designed the UX/UI of a digital agency&apos;s new
        SaaS. A team of two worked to design a platform that automates the RFP
        process. While the product is still in development, Glow has delivered
        promising work.
      </>
    ),
    rating: 5,
    link: '#',
  },
].map((r) => {
  let needle = casesData.find((c) => c.href === r.company_id);
  if (!needle) {
    needle = [
      {
        id: 'landflow',
        service: ['User Experience', 'User Interface', 'Product Design'],
        company: ['Funding $13.5M'],
      },
      {
        id: 'chatfood',
        service: ['User Experience', 'User Interface', 'Web Design'],
        company: [
          <>
            premium logistic solutions <br />
            serving over 3,000 venues and <br />
            leading brands.
          </>,
        ],
      },
      {
        id: 'sc',
        service: ['User Experience', 'User Interface', 'Product Design'],
        company: [
          <>
            social marketing <br />
            hub
          </>,
        ],
      },
      {
        id: 'bogza',
        service: ['User Experience', 'User Interface', 'Product Design'],
        company: [
          <>
            creative studio producing <br />
            immersive 3D visuals for <br />
            innovative real estate projects
          </>,
        ],
      },
    ].find((c) => c.id === r.company_id);
  }

  return {
    ...r,
    data_service: needle?.service,
    data_company: needle?.company,
  };
});

function Col({ title, items = [] }) {
  return (
    <div>
      <div className="mb-[14px] text-xs font-medium uppercase leading-[13.2px] opacity-50">
        {title}
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index} className="mb-2 text-sm">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({
  avatar,
  companyAvatar,
  name,
  company,
  text,
  rating,
  dataService,
  dataCompany,
}) {
  return (
    <div className="px-4 xl:px-14 4xl:px-[120px]">
      <div className="rounded-3xl border border-black px-6 pb-[52px] pt-8 md:grid md:grid-flow-col md:grid-cols-8 md:gap-8 md:px-0 md:py-16 xl:grid-cols-12 xl:py-20">
        <div className="hidden flex-col justify-between xl:col-span-3 xl:flex xl:pl-20">
          <div>
            <div className="mb-12">
              <Col title="Service" items={dataService} />
            </div>
            <div className="mb-20">
              <Col title="Company" items={dataCompany} />
            </div>
          </div>
          <div className="hidden md:mt-auto md:block md:w-fit">
            <ClutchRating rating={rating} className="border border-black" />
          </div>
        </div>
        <div className="md:col-span-3 md:flex md:flex-col md:justify-between md:pl-10 xl:pl-0">
          <div className="">
            <div className="mb-5 flex">
              <div className="relative z-[1] h-[64px] w-[64px] rounded-full bg-black md:-mr-4">
                <div className="absolute left-1/2 top-1/2 w-full max-w-[55px] -translate-x-1/2 -translate-y-1/2">
                  <img src={companyAvatar} alt="" className="mx-auto" />
                </div>
              </div>
              <img
                className="h-[64px] w-[64px] rounded-full"
                src={avatar}
                alt=""
              />
            </div>
            <div className="text-body-m2">{name}</div>
            <div className="mb-8 text-body-s opacity-50">{company}</div>
          </div>
        </div>
        <div className="text-2xl font-medium md:col-span-6 md:pr-[75px] md:text-[32px] md:leading-10 xl:pr-20 xl:text-[36px] xl:leading-[44px]">
          {text}
        </div>
      </div>
    </div>
  );
}
export default function Reviews() {
  const media = useMediaAtom();

  return (
    <div className="pb-6 pt-4 md:pt-12 xl:pb-4">
      <DragCursorContainer>
        <Swiper
          className=""
          breakpoints={{
            1800: {
              speed: 200,
            },
          }}
          // mousewheel={{
          //   invert: true,
          //   forceToAxis: true,
          //   sensitivity: 0.1,
          // }}
          mousewheel={{
            invert: true,
            forceToAxis: true,
            sensitivity: 0.1,
            thresholdDelta: 10,
          }}
          modules={[Mousewheel]}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="">
              <ReviewCard
                avatar={review.avatar}
                companyAvatar={review.companyAvatar}
                name={review.name}
                company={review.company}
                text={review.text}
                rating={review.rating}
                dataService={review.data_service}
                dataCompany={review.data_company}
                index={index}
                total={reviews.length}
              />
            </SwiperSlide>
          ))}
          {media !== 'desktop' && (
            <Layout className="pt-5 md:max-w-[544px]">
              <SliderProgress />
            </Layout>
          )}
        </Swiper>
      </DragCursorContainer>
    </div>
  );
}
