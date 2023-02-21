import Animated from './Animated';
import cx from 'clsx';
import Head from 'next/head';

export default function PageHeading({ className, children }) {
  return (
    <div
      className={cx(
        'font-glow text-[40px] font-medium leading-10 md:text-[80px] md:leading-[81px] xl:text-[100px] xl:leading-[90px]',
        className
      )}
    >
      <Animated immediate as="h1">
        {children}
      </Animated>
    </div>
  );
}
