import classNames from 'classnames';
import { Title } from '@/components/ui/Title';
import {
  theTeaOfSubtleJudgmentIngredients,
  theTeaOfSubtleJudgmentPreparation,
  theTeaOfSubtleJudgmentSideEffects,
} from '@/components/consts/spellCards';
import { ListWithStar } from '../../ListWithStar/ListWithStar';
import { ListWithNumber } from '../../ListWithNumber/ListWithNumber';
import styles from './SpellCard2.module.scss';

interface SpellCard2Props {
  className?: string;
}

export const SpellCard2 = ({ className }: SpellCard2Props) => {
  return (
    <article className={classNames(styles.component, className)}>
      <div className={styles.wrapper}>
        <div>
          <Title size="sm" tag="h3" titleColor="dark" className={styles.title}>
            The Tea of Subtle Judgment
          </Title>
          <p>A brew for saying everything without saying anything at all.</p>
        </div>
      </div>

      <section className={styles.section}>
        <Title
          size="xs"
          tag="h4"
          titleColor="dark"
          className={classNames(styles.subtitle, styles.ingredients)}
        >
          Ingredients:
        </Title>
        <ListWithStar object={theTeaOfSubtleJudgmentIngredients} />
      </section>

      <section className={styles.section}>
        <Title size="xs" tag="h4" titleColor="dark" className={styles.subtitle}>
          Preparation:
        </Title>
        <ListWithNumber object={theTeaOfSubtleJudgmentPreparation} />
      </section>

      <section>
        <Title size="xs" tag="h4" titleColor="dark" className={styles.subtitle}>
          Side Effects:
        </Title>

        <ListWithStar object={theTeaOfSubtleJudgmentSideEffects} />
      </section>
      <img src="/svg/bottle-2.svg" alt="" className={styles.bottle} />
    </article>
  );
};
