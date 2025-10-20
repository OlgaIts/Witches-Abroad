import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './QuoteCard.module.scss';

interface QuoteCardProps {
  className?: string;
  children: ReactNode;
}

export const QuoteCard = ({ className, children }: QuoteCardProps) => {
  return (
    <div className={classNames(styles.quote_wrapper, className)}>
      <blockquote cite="" className={styles.quote}>
        {children}
        <img
          src="/svg/quote crystal.svg"
          alt="two crystals"
          className={styles.quote_top}
        />
        <img
          src="/svg/quote crystal.svg"
          alt="two crystals"
          className={styles.quote_bottom}
        />
        <img
          src="/svg/spinnen.svg"
          alt="three spider webs with spiders"
          className={styles.spinnen}
        />
      </blockquote>
    </div>
  );
};
