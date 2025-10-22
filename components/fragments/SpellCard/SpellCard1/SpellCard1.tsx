import classNames from 'classnames';
import { Title } from '@/components/ui/Title';
import {
  antiBoreFiltrumIngredients,
  antiBoreFiltrumPreparation,
  antiBoreFiltrumSideEffects,
} from '@/components/consts/spellCards';
import { ListWithStar } from '../../ListWithStar/ListWithStar';
import { ListWithNumber } from '../../ListWithNumber/ListWithNumber';
import styles from './SpellCard1.module.scss';

interface SpellCard1Props {
  className?: string;
}

export const SpellCard1 = ({ className }: SpellCard1Props) => {
  return (
    <article className={classNames(styles.component, className)}>
      <div className={styles.wrapper}>
        <img src="/svg/bottle-1.svg" alt="" />
        <div>
          <Title size="sm" tag="h3" titleColor="dark" className={styles.title}>
            Anti-Bore-Filtrum
          </Title>
          <p>
            For those times when someone's talking... and you`ve already
            mentally left the room.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <Title size="xs" tag="h4" titleColor="dark" className={styles.subtitle}>
          Ingredients:
        </Title>
        <ListWithStar object={antiBoreFiltrumIngredients} />
      </section>

      <section className={styles.section}>
        <Title size="xs" tag="h4" titleColor="dark" className={styles.subtitle}>
          Preparation:
        </Title>
        <ListWithNumber object={antiBoreFiltrumPreparation} />
      </section>

      <section>
        <Title size="xs" tag="h4" titleColor="dark" className={styles.subtitle}>
          Side Effects:
        </Title>

        <ListWithStar object={antiBoreFiltrumSideEffects} />
      </section>
    </article>
  );
};
