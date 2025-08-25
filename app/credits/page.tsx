import classNames from 'classnames';
import styles from './page.module.scss';

interface CreditsProps {
  className?: string;
}

export default function Credits ({ className }: CreditsProps) {
  return (
    <div className={classNames(styles.component, className)}>
      Компонент для примера
    </div>
  );
};
