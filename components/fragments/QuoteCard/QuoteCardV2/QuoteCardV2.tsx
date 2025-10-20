import classNames from 'classnames';
import styles from './QuoteCardV2.module.scss';

interface QuoteCardV2Props {
  className?: string;
}

export const QuoteCardV2 = ({ className }: QuoteCardV2Props) => {
  return (
    <div className={classNames(styles.quote_card, className)}>
      <img src="/svg/beetle.svg" alt="beetle" className={styles.beetle} />
      <img
        src="/svg/spinnwebe-1.svg"
        alt="spinnwebe"
        className={styles.spinnwebe_1}
      />
      <q>
        “Nothing wrong with that. A squint looks good on a witch,” said Granny
        Weatherwax.
      </q>
      <q className={styles.text}>
        “But you have to know how to use it,” said Nanny Ogg.
      </q>
      <q>
        “Old Gertie Simmons used to have a squint and she was always putting the
        evil influence on the end of her own nose. We can`t have people thinkin`
        that if you upset a witch she curses and mutters and then her own nose
        drops off.”
      </q>
      <img
        src="/svg/spinnwebe-5.svg"
        alt="spinnwebe"
        className={styles.spinnwebe_2}
      />
      <img src="/svg/cauldron.svg" alt="cauldron" className={styles.cauldron} />
    </div>
  );
};
