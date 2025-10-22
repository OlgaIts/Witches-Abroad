import classNames from 'classnames';
import { ListItemI } from '@/components/consts/spellCards';
import styles from './ListWithNumber.module.scss';

interface ListWithNumberProps<T extends ListItemI> {
  className?: string;
  object: T[];
}

export const ListWithNumber = <T extends ListItemI>({
  className,
  object,
}: ListWithNumberProps<T>) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {object.map((item) => (
        <li key={item.id} className={styles.number_item}>
          <span className={styles.number}>{item.id}</span>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
