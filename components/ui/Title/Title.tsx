import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Title.module.scss';

type TagName = 'h1' | 'h2' | 'h3' | 'h4';
type TitleSize = 'xs' | 'sm' | 'md' | 'lg';
// 32 - h4, 48 - h3, 96 - h2, 96 - h1

interface TitleProps {
  className?: string;
  children: string | ReactNode;
  tag: TagName;
  size: TitleSize;
  isCentered?: boolean;
}

export const Title = ({
  className,
  children,
  tag,
  size,
  isCentered,
}: TitleProps) => {
  const H = tag;
  const allStyles = classNames(styles.component, className, styles[size], {
    [styles.center]: isCentered,
  });
  return <H className={allStyles}>{children}</H>;
};
