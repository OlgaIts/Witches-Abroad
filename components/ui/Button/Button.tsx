import { ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Button.module.scss';

type BtnStyle = 'default' | 'outlined';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  href?: string;
  btnStyle?: BtnStyle;
}

export const Button = ({
  className,
  children,
  href,
  btnStyle = 'default',
}: ButtonProps) => {
  const allBtnStyles = classNames(styles.button, className, styles[btnStyle]);

  if (href) {
    return (
      <Link href={href} className={allBtnStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={allBtnStyles}>
      {children}
    </button>
  );
};
