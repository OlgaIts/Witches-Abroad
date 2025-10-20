import classNames from 'classnames';
import { QuoteCard, QuoteCardV2 } from '../QuoteCard';
import styles from './QuoteSection.module.scss';

interface QuoteSectionProps {
  className?: string;
}

export const QuoteSection = ({ className }: QuoteSectionProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <div className={styles.wrapper}>
        <QuoteCardV2 />
        <img
          src="/img/Lancre Witches_Discworld_Terry Pratchett.png"
          alt="Lancre witches"
        />
      </div>
      <QuoteCard>
        <p className={styles.text}>
          Artists and writers have always had a rather exaggerated idea about
          what goes on at a witches` sabbat. This comes from spending too much
          time in small rooms with the curtains drawn, instead of getting out in
          the healthy fresh air. For example, there`s the dancing around naked.
          In the average temperate climate there are very few nights when anyone
          would dance around at midnight with no clothes on, quite apart from
          the question of stones, thistles, and sudden hedgehogs. Then there`s
          all that business with goat-headed gods. Most witches don`t believe in
          gods. They know that the gods exist, of course. They even deal with
          them occasionally. But they don`t believe in them. They know them too
          well. It would be like believing in the postman. And there`s the food
          and drink—the bits of reptile and so on. In fact, witches don`t go for
          that sort of thing. The worst you can say about the eating habits of
          the older type of witch is that they tend to like ginger biscuits
          dipped in tea with so much sugar in it that the spoon won`t move and
          will drink it out of the saucer if they think it`s too hot. And do so
          with appreciative noises more generally associated with the cheaper
          type of plumbing system. Legs of toad and so on might be better than
          this. Then there`s the mystic ointments. By sheer luck, the artists
          and writers are on firmer ground here. Most witches are elderly, which
          is when ointments start to have an attraction, and at least two of
          those present tonight were wearing Granny Weatherwax`s famous
          goose-grease-andsage chest liniment. This didn`t make you fly and see
          visions, but it did prevent colds, if only because the distressing
          smell that developed around about the second week kept everyone else
          so far away you couldn`t catch anything from them. And finally there`s
          sabbats themselves. Your average witch is not, by nature, a social
          animal as far as other witches are concerned. There`s a conflict of
          dominant personalities. There`s a group of ringleaders without a ring.
          There`s the basic unwritten rule of witchcraft, which is “Don`t do
          what you will, do what I say.” The natural size of a coven is one.
          Witches only get together when they can`t avoid it.
        </p>
        <img
          src="/svg/spinnwebe-9.svg"
          alt="spider web with spider"
          className={styles.spinnwebe}
        />
      </QuoteCard>
    </div>
  );
};
