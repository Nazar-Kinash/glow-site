import cx from 'clsx';

export default function Layout({ children, className = '' }) {
  return (
    <div
      className={cx(
        'mx-auto w-full max-w-[1920px] px-[16px] md:px-[16px] xl:px-[56px] wide:max-w-[1440px]',
        className
      )}
    >
      {children}
    </div>
  );
}

export function Layout2({ children, className = '' }) {
  return (
    <div
      className={cx(
        'mx-auto w-full max-w-[1920px] px-[16px] md:px-[16px] xl:px-[56px] wide:max-w-[1440px]',
        className
      )}
    >
      {children}
    </div>
  );
}
