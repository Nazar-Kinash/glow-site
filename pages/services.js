import Head from 'next/head';
import { useMemo } from 'react';
import IntroSection2 from '../components/IntroSection2';
import Layout from '../components/Layout';
import Logos from '../components/Pages/About/Logos';
import OurExperience from '../components/Pages/Home/OurExperience';
import Reviews from '../components/Pages/Home/Reviews2';
import TrialBanner from '../components/Pages/Home/TrialBanner';
import Approach from '../components/Pages/Services/Approach';
import Process from '../components/Pages/Services/Process';
import ServicesSelector from '../components/Pages/Services/ServiceSelector';
import Box from '../components/Pages/Services/Box';
import Slider from '../components/Pages/Services/Slider';
import { FAQ } from './contact-us';
import { getFullTitle } from '../components/HeadTitle';
import S1 from '../components/Pages/Services/assets/s1.svg';
import S2 from '../components/Pages/Services/assets/s2.svg';
import S3 from '../components/Pages/Services/assets/s3.svg';
  
function Heading() {
  const title = useMemo(() => {
    return (
      <>
        Glow design process
        <br className="hidden xl:block" /> &{' '}
        <span className="hidden xl:inline">&nbsp;</span>the list of&nbsp;our
        services
      </>
    );
  }, []);

  return (
    <IntroSection2
      className="!pt-[192px] md:!pt-[271px] xl:!pt-[300px]"
      title={title}
      subtitle="We put Human Centered Design in the core of our work to provide solutions that satisfy both business and users."
    />
  );
}

function ProcessPicture() {
	return (
		<picture>
			<source srcSet={S3.src} media="(min-width:1280px)"></source>
			<source srcSet={S2.src} media="(min-width:820px)"></source>
			<source srcSet={S1.src}></source>
			<img className="mt-10 w-full md:mt-14 xl:mt-20" src={S1.src} alt="" />
		</picture>
	)
}

export default function Services() {
	const processHeadingTitle = useMemo(() => {
		return (
			<>
				This is how <br className="hidden md:block xl:hidden" /> we do it
			</>
		)
	},[])
	
	const processHeadingDescription = "Custom software development helps you create great and super stable products by applying our workflow."

  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
      <Head>
        <title>{getFullTitle('Our Design Services')}</title>
        <meta
          name="description"
          content="Explore Glow Team's array of product design services, including UI/UX design, branding, and more. Dedicated to delivering high-quality solutions for business."
        ></meta>
      </Head>
      <Heading />
      <ServicesSelector />
      <Process 
				layoutClassNames="md:mt-[72px] xl:mt-[88px]"
				headingTitle={processHeadingTitle}
				headingDescription={processHeadingDescription}
			>
				<ProcessPicture />
			</Process>
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
