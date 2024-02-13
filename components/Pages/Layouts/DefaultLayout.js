import { useRouter } from 'next/router';
import Footer2 from '../../Footer2';
import Header from '../../Header';
import ScrollContainer from '../../SmoothScroll/ScrollContainer';

export default function DefaultLayout({
  children,
  footer = true,
  page = '',
  showFormButton = true,
  footerSuccess = false,
  footerProps = {},
}) {
  const router = useRouter();

  return (
    <>
      <Header />
      <ScrollContainer>
        {children}
        {/* {footer && <ParallaxFooter showFormButton={showFormButton} />} */}
        {footer && <Footer2 {...footerProps} footerSuccess={footerSuccess} />}
      </ScrollContainer>
    </>
  );
}
