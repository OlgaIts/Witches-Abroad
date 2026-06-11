import classNames from 'classnames';
import { Title } from '@/components/ui/Title';
import { SpellCard2 } from '../SpellCard/SpellCard2/SpellCard2';
import { SpellSectionContent1 } from '../SpellSectionContent/SpellSectionContent1/SpellSectionContent1';
import styles from './SpellsSection.module.scss';
import { SpellSectionContent2 } from '../SpellSectionContent/SpellSectionContent2/SpellSectionContent2';

interface SpellsSectionProps {
  className?: string;
}

export const SpellsSection = ({ className }: SpellsSectionProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <div className={styles.title_wrapper}>
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
          cackled by Nanny Ogg. Not guaranteed to work, but highly recommended
          for amusement.
        </p>
      </div>
      <SpellSectionContent1 />
      <SpellSectionContent2 />
    </section>
  );
};
