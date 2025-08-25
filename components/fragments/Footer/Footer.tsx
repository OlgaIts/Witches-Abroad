import classNames from 'classnames';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classNames(styles.footer, className)}>
      <div className={styles.container}>пример</div>
    </footer>
  );
};
