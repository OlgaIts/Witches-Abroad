import classNames from 'classnames';
import styles from './SpellSectionContent2.module.scss';
import { SpellCard2 } from '../../SpellCard/SpellCard2/SpellCard2';

interface SpellSectionContent2Props {
  className?: string;
}

export const SpellSectionContent2 = ({
  className,
}: SpellSectionContent2Props) => {
  return (
    <div className={classNames(styles.component, className)}>
      <div className={styles.img_wrapper}>
        <img src="/svg/absinthe.svg" alt="" className={styles.img_absinthe} />
        <img src="/svg/bull.svg" alt="" className={styles.img_bull} />
        <img src="/svg/star-5.svg" alt="" className={styles.img_star_1} />
        <img src="/svg/star-4.svg" alt="" className={styles.img_star_2} />
        <img src="/svg/star-2.svg" alt="" className={styles.img_star_3} />
        <img src="/svg/bagel-1.svg" alt="" className={styles.img_bagel_1} />
      </div>
      <SpellCard2 />
    </div>
  );
};
