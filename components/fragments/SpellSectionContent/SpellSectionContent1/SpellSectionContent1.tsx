import classNames from 'classnames';
import { SpellCard1 } from '../../SpellCard/SpellCard1/SpellCard1';
import styles from './SpellSectionContent1.module.scss';

interface SpellSectionContent1Props {
  className?: string;
}

export const SpellSectionContent1 = ({
  className,
}: SpellSectionContent1Props) => {
  return (
    <div className={classNames(styles.component, className)}>
      <SpellCard1 />
      <div className={styles.img_wrapper}>
        <img src="/svg/bat.svg" alt="" className={styles.img_bat} />
        <img src="/svg/castle.svg" alt="" className={styles.img_castle} />
        <img src="/svg/bagel-1.svg" alt="" className={styles.img_bagel_1} />
        <img src="/svg/star-6.svg" alt="" className={styles.img_star_1} />
        <img src="/svg/star-3.svg" alt="" className={styles.img_star_2} />
        <img src="/svg/star-7.svg" alt="" className={styles.img_star_3} />
      </div>
    </div>
  );
};
