import cx from 'clsx';
import Link from 'next/link';
import Button2 from '../../Button';
import Image from '../../Image';
import Layout from '../../Layout';
import LogoG from './assets/logo-g.png';
import Sphere from './assets/sphere.png';
import CtaBG from './assets/cta-bg.png';

function Card({ className, children, hideBg = false }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl p-6 xl:px-6',
        { 'bg-[rgba(255,255,255,0.05)]': !hideBg },
        className
      )}
    >
      {children}
    </div>
  );
}

function NumCard({ num, title }) {
  return (
    <Card className="relative flex items-center space-x-6 md:flex-col md:items-start md:space-x-0 md:space-y-[20px]">
      <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-brand p-[6px] font-inter text-[16px] font-medium leading-[20px] text-white xl:text-[16px] xl:leading-[20px]">
        {num}
      </div>
      <div className="text-next-heading-7">{title}</div>
    </Card>
  );
}

export function Tag({ name }) {
  return (
    <div className="glow-border-light rounded-full px-[10px] py-[2px] text-next-tag font-medium uppercase">
      {name}
    </div>
  );
}

const tags = ['Discovery', 'UI Design', 'UX Design', 'Design Audit', 'MVP'];

export default function TrialBanner() {
  return (
    // <Layout className="mb-[72px] font-inter md:mb-[144px] xl:mb-[176px]">
    <div className="relative -mx-2 overflow-hidden rounded-[32px] bg-black p-4 text-white md:mx-0">
      <div className="bg-bl absolute inset-0"></div>
      {/* <Image
        src={CtaBG}
        alt=""
        className="pointer-events-none absolute inset-0 h-full max-h-[50%] w-[200%] max-w-[200%] md:h-auto md:max-h-full md:w-full md:max-w-full"
      /> */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card hideBg className="relative !p-2 !pb-4 md:col-span-2 md:!p-8">
          <h2 className="relative mb-8 text-next-heading-5 md:mb-8 md:text-next-heading-3 xl:mb-8 xl:text-next-heading-2">
            Start with
            <br className="hidden md:block" /> a free
            <br className="md:hidden" /> 3&#8209;day trial
          </h2>
          <Button2
            as={Link}
            className="relative w-full !bg-white !px-[20px] !py-[12px] text-center font-medium !text-black md:w-auto"
            href="/contact-us"
            color="white"
          >
            Get started
          </Button2>
        </Card>
        <Card className="relative md:col-span-2 xl:!p-6">
          {/* <Image
            src={LogoG}
            alt=""
            className="pointer-events-none absolute right-0 top-0 h-full w-auto object-cover opacity-40"
          /> */}
          <div className="h-full md:flex md:flex-col md:justify-between">
            <div className="relative mb-8 text-next-body-s md:mb-[40px] md:text-[16px] md:leading-[25.8px] xl:mb-[80px] xl:text-next-body-m">
              To reduce your risks and help you get to know us better, we offer
              the first three days of work at no charge. This way, you can
              evaluate our skills and decide whether you want to work with us
              going forward.
            </div>
            <div className="relative flex flex-wrap gap-2 md:max-w-[80%] xl:max-w-full xl:pb-0">
              {tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
        </Card>

        <NumCard num={'1'} title="Discovery Call" />
        <NumCard num={'2'} title="Design" />
        <NumCard num={'3'} title="Work Presentation" />
        <NumCard num={'4'} title="Partnership" />
        {/* <Card>Hello</Card>

        {/* <Card>Hello</Card>
        {/* <Card>Hello</Card>
        {/* <Card>Hello</Card>
        <Card>Hello</Card>
        <Card>Hello</Card> */}
      </div>
    </div>
    // </Layout>
  );
}
