import Head from 'next/head';
import Header from '../Renovation/Header';
import Animated from '../../../Animated';
import RespImage from '../Renovation/RespImage';
import Layout from '../../../Layout';
import RespSVG from '../Renovation/RespSVG';
import Image from 'next/image';
import Frame3 from './assets/frame-3.png';
import Frame3md from './assets/frame-3-md.png';
import Frame3xl from './assets/frame-3-xl.png';
import Frame4 from './assets/frame-4.png';
import Frame5 from './assets/frame-5.png';
import Frame6 from './assets/frame-6.png';
import Frame7 from './assets/frame-7.png';
import Frame8 from './assets/frame-8.png';
import Frame9 from './assets/frame-9.png';
import Frame10md from './assets/frame-10-md.png';
import Frame10xl from './assets/frame-10-xl.png';

export default function AiProductivity() {
  return (
    <>
      <Head>
        <title>Case Ai - Your Digital Ally for Seamless Productivity</title>
        <meta
          name="description"
          content="Case Ai - Your Digital Ally for Seamless Productivity"
        ></meta>
      </Head>
      <Layout disablePadding className="mb-[96px] xl:mb-[132px]">
        <Animated>
          <video
            autoPlay
            loop
            muted
            preload="auto"
            controls={false}
            src="/video/ai/video-1.mp4"
            className="object-fill md:max-h-[569px] xl:max-h-[800px]"
          />
        </Animated>
      </Layout>
      <Layout>
        <div className="mb-8 md:mb-[48px] xl:mb-[77px]">
          <div className="mb-4">
            <RespSVG
              src="/img/aiCase/frame-2.svg"
              className=""
              md="/img/aiCase/frame-2-xl.svg"
              xl="/img/aiCase/frame-2-xl.svg"
            />
          </div>
          <div className=" items-start justify-between gap-[90px] md:flex">
            <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[45.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[40.3%] xl:text-[48px] xl:leading-[48px] xl:tracking-[-4px]">
              From scheduling <br className="sm:hidden" /> and inquiries to{' '}
              <span className="text-light-red">brainstorming</span> and
              problem&#8209;solving
            </h2>
            <p className="text-[12px] font-normal  leading-[17px] text-[#6F6F6F] md:max-w-[50%] md:text-[14px] md:leading-[20px] xl:max-w-[46.4%] xl:text-[16px] xl:leading-[24px]">
              Step into the future of conversational AI with our advanced
              chatbot assistant, engineered to transform how you engage with
              technology. Designed with a perfect blend of functionality and
              aesthetics, this AI-powered assistant is not just about delivering
              answers—it’s about understanding your needs, anticipating your
              next steps, and integrating seamlessly into your daily tasks.
            </p>
          </div>
        </div>
        <div className="mb-[96px] xl:mb-[132px]">
          <RespImage
            src={Frame3}
            className="hidden w-full sm:block"
            md={Frame3md}
            xl={Frame3xl}
          />
          <div className="mb-3">
            <RespImage
              src={Frame4}
              className="w-full sm:hidden"
              md={Frame4}
              xl={Frame4}
            />
          </div>
          <div className="mb-3">
            <RespImage
              src={Frame5}
              className="w-full sm:hidden"
              md={Frame5}
              xl={Frame5}
            />
          </div>
          <div className="mb-3 h-[151px] object-cover xs:h-auto">
            <RespImage
              src={Frame6}
              className=" h-[151px] w-full  object-cover object-top xs:h-auto sm:hidden"
              md={Frame6}
              xl={Frame6}
            />
          </div>
          <div className="mb-3">
            <RespImage
              src={Frame7}
              className="w-full sm:hidden"
              md={Frame7}
              xl={Frame7}
            />
          </div>
          <div className="mb-3">
            <RespImage
              src={Frame8}
              className="w-full sm:hidden"
              md={Frame8}
              xl={Frame8}
            />
          </div>
          <div>
            <RespImage
              src={Frame9}
              className="w-full sm:hidden"
              md={Frame9}
              xl={Frame9}
            />
          </div>
        </div>
      </Layout>
      <div className="relative mb-[96px] h-[812px] w-full xs:h-auto xl:mb-[132px] ">
        <RespImage
          src={Frame10md}
          className="hidden h-full w-full md:block"
          md={Frame10md}
          xl={Frame10xl}
        />
        <Image
          src="/img/aiCase/frame-9-md.svg"
          className="hidden h-auto w-full xs:block md:hidden"
          width={0}
          height={0}
          alt=""
        />
        <RespSVG
          src="/img/aiCase/frame-9.svg"
          className="h-full w-full object-cover object-top xs:hidden"
          md="/img/aiCase/frame-9-md.svg"
          xl="/img/aiCase/frame-9-xl.svg"
        />
        <RespSVG
          src="/img/aiCase/frame-10.svg"
          className="absolute-center !top-[66%] xs:hidden"
          md="/img/aiCase/frame-10.svg"
          xl="/img/aiCase/frame-10.svg"
        />
      </div>
      <Layout>
        <div className="mb-8 md:mb-[99px] xl:mb-[80px]">
          <div className="mb-4">
            <RespSVG
              src="/img/aiCase/frame-12.svg"
              className=""
              md="/img/aiCase/frame-12-md.svg"
              xl="/img/aiCase/frame-12-xl.svg"
            />
          </div>
          <div className=" items-start justify-between md:flex md:gap-[40px] xl:gap-[90px]">
            <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[53.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[43.3%] xl:text-[48px] xl:leading-[48px] xl:tracking-[-4px]">
              Your{' '}
              <span className="text-light-red">
                All-in-One <br className="sm:hidden" />
                AI
              </span>
              <br className="hidden xl:block" />{' '}
              <span className="md:text-light-red">Assistant</span>:
              <br className="md:hidden" /> A Personal Guide,{' '}
              <br className="sm:hidden" /> Creative Partner,{' '}
              <br className="md:hidden" />
              and Smart Strategist
            </h2>
            <p className="text-[12px] font-normal  leading-[17px] text-[#6F6F6F] md:max-w-[50%] md:text-[14px] md:leading-[20px] xl:max-w-[46.4%] xl:text-[16px] xl:leading-[24px]">
              This assistant helps with choosing interior designs, writing
              essays, crafting social media posts, analyzing competitors, and
              even performing calculations. It analyzes images to suggest design
              ideas, generates well-researched essays, creates engaging posts
              based on trends, and provides accurate calculations, all tailored
              to your needs.
            </p>
          </div>
        </div>
        <div className="mb-[96px] w-full xl:mb-[132px]">
          <RespSVG
            src="/img/aiCase/frame-13.svg"
            className="w-full"
            md="/img/aiCase/frame-13-md.svg"
            xl="/img/aiCase/frame-13-xl.svg"
          />
        </div>
      </Layout>
      <Layout>
        <div className="mb-8 md:mb-[100px] xl:mb-[115px]">
          <div className="mb-4">
            <RespSVG
              src="/img/aiCase/frame-14.svg"
              className=""
              md="/img/aiCase/frame-14-md.svg"
              xl="/img/aiCase/frame-14-xl.svg"
            />
          </div>
          <div className=" items-start justify-between md:flex md:gap-[30px] xl:gap-[90px]">
            <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[45.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[44.3%] xl:text-[48px] xl:leading-[52.8px] xl:tracking-[-4px]">
              Interactive{' '}
              <span className="md:text-light-red">Intelligence</span>:
              <br className="hidden sm:block md:hidden" /> Real-Time{' '}
              <span className="text-light-red md:text-black">Engagement</span>{' '}
              <br className="hidden sm:block md:hidden" />
              Through Dynamic Visual Feedback
            </h2>
            <p className="text-[12px] font-normal  leading-[17px] text-[#6F6F6F] md:max-w-[50.5%] md:text-[14px] md:leading-[20px] xl:max-w-[46.4%] xl:text-[16px] xl:leading-[24px]">
              This animation highlights the AI&#39;s engagement, with real-time
              visual feedback. As the AI speaks, the pulsing motion of the
              sphere conveys intelligence and responsiveness, turning the
              conversation into a more interactive and visually engaging
              experience.
            </p>
          </div>
        </div>
        <div className="mb-[96px] w-full xl:mb-[132px]">
          <Animated>
            <video
              autoPlay
              loop
              muted
              preload="auto"
              controls={false}
              src="/video/ai/video-2.mp4"
              className="md:max-h-[930px] xl:max-h-[1271px] "
            />
          </Animated>
        </div>
      </Layout>
      <Layout>
        <div className="mb-[48px] w-full md:mb-[96px] xl:mb-[132px]">
          <Animated>
            <video
              autoPlay
              loop
              muted
              preload="auto"
              controls={false}
              src="/video/ai/video-3.mp4"
              className="object-fill md:max-h-[648px] xl:max-h-[886px] "
            />
          </Animated>
        </div>
      </Layout>
    </>
  );
}
