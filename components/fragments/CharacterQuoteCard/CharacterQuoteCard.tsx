import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './CharacterQuoteCard.module.scss';

interface CharacterQuoteCardProps {
  className?: string;
  children: ReactNode;
}

export const CharacterQuoteCard = ({
  className,
  children,
}: CharacterQuoteCardProps) => {
  return (
    <div className={classNames(styles.quote_wrapper, className)}>
      <blockquote cite="" className={styles.quote}>
        {children}
        <img
          src="/svg/spinnwebe-6.svg"
          alt="spider web with spider"
          className={styles.spinnwebe}
        />
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
