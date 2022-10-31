import { addLeadingZero } from '../../../lib/utils';
import Section from '../../Section';

const stages = [
  {
    title: 'Investigate',
    description: 'By working with transportation related companies we deep.',
  },
  {
    title: 'Ideate',
    description: 'By working with transportation related companies we deep.',
  },
  {
    title: 'Create',
    description: 'By working with transportation related companies we deep.',
  },
  {
    title: 'Iterate',
    description: 'By working with transportation related companies we deep.',
  },
];

const stats = [
  {
    title: 'average employee experience',
    value: '5+ years',
  },
  {
    title: 'Rating the Clutch',
    value: '5.0',
  },
  {
    title:
      'of clients who have trusted us with their startups lead their markets now',
    value: '90%',
  },
  {
    title:
      'average design partnership for our clients after launching the project',
    value: '1.5 years',
  },
  {
    title: 'Quality guarantee',
    value: '12k',
  },
  {
    title: 'total investments in our clients’ projects',
    value: '$50M',
  },
];

export default function Workflow() {
  return (
    <Section className="pt-16 md:pt-[139px] xl:pt-[176px]">
      <Section.Header>
        <Section.Title>Workflow</Section.Title>
        <Section.Description>
          Our approach allows us to make complex things simple. We will learn
          about your business, study the audience.
        </Section.Description>
      </Section.Header>
      <div className="mt-[64px] flex flex-wrap divide-y divide-black md:divide-x">
        {stages.map((stage, i) => (
          <div
            key={i}
            className="w-full pt-[49px] pb-[33px] first:border-t first:border-black last:border-t last:border-black md:w-1/2 md:px-[44px] md:pt-[48px] md:pb-[40px] md:odd:!border-l-0"
          >
            <div className="text-xs font-medium uppercase opacity-50">
              {addLeadingZero(i + 1)} Stage
            </div>
            <div className="mb-[75px]">
              <svg
                width="184"
                height="124"
                viewBox="0 0 184 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84 79.9599L54.5192 88.8264L73.0962 113.612L59.7692 123.285L42 98.2974L24.2308 123.285L10.7019 113.612L29.2788 88.8264L3.84181e-06 79.9599L5.04808 64.242L34.125 74.116L33.7212 43.2848L50.2788 43.2848L49.875 73.9145L78.9519 64.242L84 79.9599Z"
                  fill="url(#paint0_linear_2141_1369)"
                />
                <path
                  d="M161.418 80.061L132.59 69.2595L132.358 100.233L115.896 99.8577L116.892 69.2125L87.6179 78.3319L82.7118 62.4411L112.506 53.9713L94.5798 29.182L108.117 19.7331L125.272 45.2017L143.626 20.425L156.8 30.454L137.927 54.5812L166.921 64.4968L161.418 80.061Z"
                  fill="url(#paint1_linear_2141_1369)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2141_1369"
                    x1="147.891"
                    y1="162.997"
                    x2="11.1025"
                    y2="84.9743"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#19191B" />
                    <stop offset="1" stopColor="#19191B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2141_1369"
                    x1="161.959"
                    y1="184.832"
                    x2="100.377"
                    y2="39.8968"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#19191B" />
                    <stop offset="1" stopColor="#19191B" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mb-4 text-lg font-medium">{stage.title}</div>
            <div className="md:max-w-[270px]">{stage.description}</div>
          </div>
        ))}
      </div>
      <div className="border-b border-t border-black pt-[56px] md:flex md:items-end md:pb-24">
        <div className="pl-[6px] md:w-5/12">
          <div className="mb-4 text-center font-glow text-xl font-medium leading-[170%] md:text-left">
            Compact = Efficient
          </div>
          <div className="text-center text-lg italic leading-[133%] md:text-left">
            We measure our success with numbers and feelings. But first, let the
            numbers talk:
          </div>
        </div>
        <div className="mt-[40px] md:mb-[-72px] md:flex md:w-7/12 md:flex-wrap">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="mb-6 md:mb-[72px] md:w-1/2 md:pr-[80px] md:even:pr-0"
            >
              <div className="mb-2 text-xs font-medium uppercase opacity-50">
                {stat.title}
              </div>
              <div className="mb-2 text-[33px] font-medium leading-[170%] md:text-[44px] md:leading-[127%]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
