import Link from 'next/link';
import { navigationItems } from '@/components/consts';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        Sir Terry <br />
        Pratchett
      </Link>
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
    </div>
  );
};
