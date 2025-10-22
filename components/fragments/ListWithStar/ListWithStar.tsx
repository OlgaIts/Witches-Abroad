import classNames from 'classnames';
import { ListItemI } from '@/components/consts/spellCards';
import styles from './ListWithStar.module.scss';

interface ListWithStarProps<T extends ListItemI> {
  className?: string;
  object: T[];
}

export const ListWithStar = <T extends ListItemI>({
  className,
  object,
}: ListWithStarProps<T>) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {object.map((item) => (
        <li key={item.id} className={styles.list_item}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};
