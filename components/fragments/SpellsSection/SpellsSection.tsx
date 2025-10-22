import classNames from 'classnames';
import { Title } from '@/components/ui/Title';
import { SpellCard1 } from '../SpellCard/SpellCard1/SpellCard1';
import styles from './SpellsSection.module.scss';

interface SpellsSectionProps {
  className?: string;
}

export const SpellsSection = ({ className }: SpellsSectionProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Title
        tag="h2"
        size="lg"
        isCentered
        titleColor="accent"
        className={styles.title}
      >
        Spells & Witchly Advice
      </Title>
      <p className={styles.text}>
        A collection of questionable spells, timeless witch wisdom, and
        practical headology, as might be whispered by Granny Weatherwax or
        cackled by Nanny Ogg. Not guaranteed to work, but highly recommended for
        amusement.
      </p>
      <SpellCard1 />
    </section>
  );
};
