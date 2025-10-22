import classNames from 'classnames';
import styles from './SpellCard2.module.scss';

interface SpellCard2Props {
  className?: string;
}

export const SpellCard2 = ({ className }: SpellCard2Props) => {
  return (
    <div className={classNames(styles.component, className)}>
      Компонент для примера
    </div>
  );
};
