'use client';

import Link from 'next/link';
import { navigationItems } from '@/components/consts';
import styles from './Nav.module.scss';
import { usePathname } from 'next/navigation';
import useResize from '@/components/utils/useResize';
import { MobileMenu } from '@/components/fragments/MobileMenu/MobileMenu';

export const Nav = () => {
  const pathname = usePathname();
  const isMobile = useResize('lg');

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        Sir Terry <br />
        Pratchett
      </Link>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <nav>
          <ul className={styles.list}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className={styles.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
