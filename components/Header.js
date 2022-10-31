import cx from 'clsx';
import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { useSupports } from '../lib/agent';
import { useBodyLock } from '../lib/utils';
import BigButton from './BigButton';
import Layout from './Layout';
import Logo from './Logo';

function BurgerIcon({ isOpen = false }) {
  if (isOpen) {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.68628 9L31.3137 31.6274" stroke="#19191B" strokeWidth="2" />
        <path
          d="M8.68628 32L31.3137 9.37258"
          stroke="#19191B"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      width="32"
      height="18"
      viewBox="0 0 32 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H32M0 17H32" stroke="#19191B" strokeWidth="2" />
    </svg>
  );
}

const BurgerButton = ({ isOpen, className, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={cx(
        'flex items-center justify-center',
        {
          ['px-[4px] py-[11px]']: !isOpen,
        },
        className
      )}
    >
      <BurgerIcon isOpen={isOpen} />
    </button>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Work', 'Team', 'Services'];
  const menuId = useId();
  const { lock, release } = useBodyLock();
  const isEyeDropperSupported = useSupports('EyeDropper');

  useEffect(() => {
    if (isOpen) {
      lock();
    } else {
      release();
    }
  }, [isOpen]);

  const onBurgerClick = () => {
    setIsOpen((v) => !v);
  };

  const handleTestClick = () => {
    const eyeDropper = new EyeDropper();

    console.log('before open');
    eyeDropper
      .open()
      .then((result) => {
        console.log('after open');
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <header>
      <Layout>
        <div
          className={cx({
            ['flex h-screenx flex-col justify-between bg-brand']: isOpen,
          })}
        >
          <div className="flex items-center justify-between py-[28px] font-medium uppercase text-black">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <div className="ml-[-100px] hidden lg:block">
              {links.map((link) => (
                <Link
                  className="mr-[77px] text-sm last:mr-0"
                  key={link}
                  href="/"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="hidden lg:block">
              <Link
                href="/"
                className="glow-border-black rounded-full px-4 py-[15px] text-sm leading-[19px] shadow-black transition-colors hover:bg-black hover:text-brand"
              >
                Let&apos;s get in touch
              </Link>
            </div>
            <BurgerButton
              className="lg:hidden"
              aria-controls={menuId}
              isOpen={isOpen}
              onClick={onBurgerClick}
              aria-expanded={isOpen}
            />
          </div>

          {isOpen && (
            <>
              <nav
                aria-label="Main menu"
                role="navigation"
                id={menuId}
                className="flex flex-col"
              >
                <ul className="text-center">
                  {links.map((item) => (
                    <li
                      key={item}
                      className="mb-[24px] text-[59px] uppercase leading-[80px] last:mb-[0px]"
                    >
                      <a
                        href="#"
                        className="flex items-center justify-center font-medium text-black"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <BigButton
                onClick={() => {
                  handleTestClick();
                }}
                className="mb-[60px]"
              >
                let’s get in touche{' '}
              </BigButton>
            </>
          )}
        </div>
      </Layout>
    </header>
  );
}
