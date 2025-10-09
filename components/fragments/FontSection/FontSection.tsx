import classNames from 'classnames';
import styles from './FontSection.module.scss';
import { Title } from '@/components/ui/Title';

interface FontSectionProps {
  className?: string;
}

export const FontSection = ({ className }: FontSectionProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Title size="lg" tag="h2" titleColor="accent" isCentered>
        Fonts
      </Title>
      <p className={styles.text}>
        All fonts used on this site were sourced from Online-Fonts and are used
        in accordance with their respective licenses.
      </p>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            Night Ghost - ®Afika Studio 2021 - used under a commercial license.
          </li>
          <li className={styles.list_item}>
            Gowun Dodum - by Yanghee Ryu - SIL Open Font License
          </li>
          <li className={styles.list_item}>
            Jolly Lodger Cyrillic - by Stuart Sandler - SIL Open Font License
          </li>
          <li className={styles.list_item}>
            Hi Melody Cyrillic - by Yoon and Denis Ignatov (http://mutno.me) -
            SIL Open Font License
          </li>
        </ul>
        <img src="/svg/hat on the book.svg" alt="hat on the book" />
      </div>
    </section>
  );
};
