'use client';

import classNames from 'classnames';
import styles from './AuthorSection.module.scss';

interface AuthorSectionProps {
  className?: string;
}

export const AuthorSection = ({ className }: AuthorSectionProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      Компонент для примера
    </div>
  );
};
