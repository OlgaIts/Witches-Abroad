'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './MobileMenu.module.scss';
import { X } from 'lucide-react';
import { navigationItems } from '@/components/consts';

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    handleClose();
  }, [pathname]);

  return (
    <div className={classNames(styles.component, className)}>
      <button
        className={styles.btn}
        onClick={handleOpen}
        type="button"
        aria-label="Open menu"
      >
        <img className={styles.svg} alt="" src={'/svg/bat-menu.svg'} />
      </button>

      <div
        className={classNames(styles.overlay, isOpen && styles.overlay_visible)}
        onClick={handleClose}
      />

      <div
        className={classNames(styles.menu, isOpen && styles.menu_open)}
        aria-hidden={!isOpen}
      >
        <div className={styles.decorations} aria-hidden="true">
          <img
            src="/svg/cauldron2.svg"
            alt=""
            className={styles.deco_cauldron}
          />
          <img src="/svg/spider.svg" alt="" className={styles.deco_spider} />
          <img src="/svg/star-9.svg" alt="" className={styles.deco_star9} />
          <img src="/svg/star-10.svg" alt="" className={styles.deco_star10} />
          <img src="/svg/star-11.svg" alt="" className={styles.deco_star11} />
          <img src="/svg/star-2.svg" alt="" className={styles.deco_star2} />
          <img src="/svg/star-5.svg" alt="" className={styles.deco_star5} />
        </div>

        <button
          className={styles.close_btn}
          onClick={handleClose}
          aria-label="Close menu"
        >
          <X />
        </button>

        <nav>
          <ul className={styles.list}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className={styles.item}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
