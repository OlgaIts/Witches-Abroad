import classNames from 'classnames';
import { Title } from '@/components/ui/Title';
import { books } from '@/components/consts/books';
import styles from './SeriesSection.module.scss';

interface SeriesSectionProps {
  className?: string;
}

export const SeriesSection = ({ className }: SeriesSectionProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Title
        tag="h2"
        size="lg"
        isCentered
        titleColor="accent"
        className={styles.title}
      >
        Witches Series
      </Title>
      <ul className={styles.list} role="list">
        {books.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.alt} />
            <Title tag="h3" size="sm" titleColor="light" isCentered>
              {item.title}
            </Title>
          </li>
        ))}
      </ul>
    </section>
  );
};
