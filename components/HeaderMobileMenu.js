import { useAtom } from 'jotai';
import Link from 'next/link';
import { useMemo } from 'react';
import { useHandleFooterFormClick } from '../lib/utils';
import BigButton from './BigButton';
import { Animation, subMenuParentAtom } from './Header';
import HeaderLinkMobile from './HeaderLinkMobile';
import texts from './texts';
import Button2 from './Button';
import { SocialLinks } from './Footer/FooterLinks';
import Animated from './Animated';

export default function HeaderMobileMenu({ menuId, links }) {
  const [activeParent, setActiveParent] = useAtom(subMenuParentAtom);
  const handleFooterFormClick = useHandleFooterFormClick();

  const _links = useMemo(() => {
    if (activeParent) return links.filter((item) => item === activeParent);

    return links;
  }, [links, activeParent]);

  return (
    <div className="flex flex-col justify-between pb-4 pt-[13px]">
      <nav
        aria-label="Main menu"
        role="navigation"
        id={menuId}
        className="flex flex-col"
      >
        <ul className="flex flex-col gap-8">
          {_links.map((item, i) => (
            <Animation as="li" key={item.href} index={i}>
              <HeaderLinkMobile item={item} />
            </Animation>
          ))}
        </ul>
        {activeParent && (
          <div className="-mx-4 border-t px-4 pt-12">
            {activeParent.children.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="mb-[31px] flex last:mb-20"
              >
                <div className="mr-6 flex min-w-16  justify-center">
                  {item.icon}
                </div>
                <div className="pt-2">
                  <div className="mb-2 text-body-heading-m">{item.title}</div>
                  <div className="text-body-s opacity-50">{item.text}</div>
                </div>
              </Link>
            ))}
            {/* <HeaderSubMenu subMenuItems={activeParent.children} /> */}
          </div>
        )}
      </nav>
      {!activeParent && (
        <Animation index={links.length} className="my-8">
          <Button2
            as={Link}
            href="/contact-us"
            className="w-full !bg-black text-center !text-white"
            size="large"
          >
            {texts.header_cta}
          </Button2>
        </Animation>
      )}
      <Animated delay={300}>
        <SocialLinks />
      </Animated>
    </div>
  );
}
