import classNames from 'classnames';
import { Title } from '@/components/ui/Title';
import { QuoteCard } from '../QuoteCard/QuoteCard/QuoteCard';
import styles from './Characters.module.scss';

export const Characters = () => {
  return (
    <section className={styles.characters}>
      <div className={styles.heading}>
        <Title size="lg" tag="h2" isCentered titleColor="accent">
          Characters
        </Title>
      </div>

      <article className={styles.article}>
        <img
          className={styles.granny_weatherwax}
          alt="Granny weatherwax"
          src={'/img/granny_weatherwax.png'}
        />
        <div>
          <div className={styles.subtitle_text}>
            <Title
              size="sm"
              tag="h3"
              titleColor="light"
              className={styles.subtitle}
            >
              Esmerelda &#34;Esme&#34; Weatherwax
            </Title>

            <p className={styles.text}>
              Mother Weatherwax is one of the most powerful witches. Her real
              name is Esmerelda Weatherwax, and she lives in the Ramtops
              Mountains. Although she never calls herself the head witch, other
              witches usually don’t argue about it. She possesses a sharp mind,
              iron will, and a special gift called “headology” — the ability to
              influence people through the power of personality. Mother
              Weatherwax rarely uses magic directly, preferring persuasion,
              intimidation, and common sense. She embodies practicality,
              strictness, and deep inner justice, and even Death himself shows
              her respect.
            </p>
          </div>

          <QuoteCard>
            <p className={styles.text}>
              Granny Weatherwax looked out at the multi-layered, silvery world.
            </p>
            <q className={styles.quote_text}>“Where am I?”</q>
            <q className={styles.quote_text}>“INSIDE THE MIRROR.”</q>
            <q className={styles.quote_text}>“Am I dead?”</q>
            <p className={styles.text}>“THE ANSWER TO THAT,” said Death,</p>
            <q className={styles.quote_text}>
              “IS SOMEWHERE BETWEEN NO AND YES.”
            </q>
            <p className={styles.text}>
              Esme turned, and a billion figures turned with her.
            </p>
            <q className={styles.quote_text}>“When can I get out?”</q>
            <q className={styles.quote_text}>
              “WHEN YOU FIND THE ONE THAT`S REAL.”
            </q>
            <q className={styles.quote_text}>“Is this a trick question”</q>
            <q className={styles.quote_text}>“NO.”</q>
            <p className={styles.text}>Granny looked down at herself.</p>
            <q className={styles.quote_text}>“This one,” she said.</q>
            <img
              src="/svg/spinnwebe-6.svg"
              alt="spider web with spider"
              className={styles.spinnwebe}
            />
          </QuoteCard>
        </div>
      </article>

      <article className={classNames(styles.article, styles.article_ogg)}>
        <div>
          <div className={styles.subtitle_text}>
            <Title
              size="sm"
              tag="h3"
              titleColor="light"
              className={styles.subtitle}
            >
              Gytha Ogg and Greebo
            </Title>

            <p className={styles.text}>
              Nanny Ogg, or Gytha Ogg, is one of the most respected witches in
              the Ramtops and the closest friend of Granny Weatherwax. Unlike
              the stern and serious Esme, Nanny is a cheerful, loud woman who
              loves singing bawdy songs and throwing noisy parties — especially
              with a mug of &#34;Scumble&#34; in her hand. She&#39;s the mother
              of a large and chaotic family, a keeper of folk wisdom, and
              prefers magic rooted in common sense and psychological savvy. Her
              home is always lively, and at the center of the mayhem is her cat
              Greebo — a disgustingly lecherous, lazy, and insolent creature
              whom she adores nonetheless. Beneath her seemingly simple
              exterior, Nanny Ogg hides a sharp mind and a master manipulator’s
              skill — one capable of nudging even Granny Weatherwax in the right
              direction when truly necessary.
            </p>
          </div>

          <QuoteCard>
            <div className={styles.quote_text_wrapper}>
              <q className={styles.quote_text}>
                “It wasn`t gambling!” snapped Nanny. “I never gamble! They were
                no good at cards! I won no end of games!”
              </q>
              <q className={styles.quote_text}>
                “But you lost money,” said Granny.
              </q>
              <p className={styles.text}>
                Nanny Ogg looked down again, and muttered something.
              </p>
              <q className={styles.quote_text}>“What?” said Granny.</q>

              <q className={styles.quote_text}>
                “I said I won nearly all of them,” said Nanny. “And then I
                thought, here, we could really have a bit of money to, you know,
                spend in the city, and I`ve always been very good at Cripple Mr.
                Onion…”
              </q>
              <q className={styles.quote_text}>
                “So you decided to bet heavily,” said Granny.
              </q>
              <q className={styles.quote_text}>“How did you know that?”</q>

              <q className={styles.quote_text}>
                “Got a feelin` about it,” said Granny wearily. “And suddenly
                everyone else was lucky, am I right?”
              </q>
              <q className={styles.quote_text}>“It was weird,” said Nanny.</q>
              <q className={styles.quote_text}>“Hmm.”</q>
              <q className={styles.quote_text}>
                “Well, it`s not gambling,” said Nanny. “I didn`t see it was
                gambling. They were no good when I started playing. It`s not
                gambling to play against someone who`s no good. It`s common
                sense.”
              </q>
            </div>
            <img
              src="/svg/spinnwebe-6.svg"
              alt="spider web with spider"
              className={styles.spinnwebe}
            />
          </QuoteCard>
        </div>

        <img
          className={styles.githa_ogg_card}
          alt="Githa ogg"
          src={'/img/githa_ogg.png'}
        />
      </article>

      <article className={styles.article}>
        <img
          className={styles.magrat_garlick_card}
          alt="Magrat garlick"
          src={'/img/magrat_garlick.png'}
        />
        <div>
          <div className={styles.subtitle_text}>
            <Title
              size="sm"
              tag="h3"
              titleColor="light"
              className={styles.subtitle}
            >
              Magrat Garlick
            </Title>

            <p className={styles.text}>
              Magrat Garlick is a young witch, apprentice and follower of Granny
              Weatherwax and Nanny Ogg. Unlike her mentors, she is more inclined
              toward studying traditional magic and herbalism, and she always
              carries a pair of scissors — a symbol of her readiness for change
              and decisive action. Magrat often comes across as serious and a
              bit shy, yet she possesses a strong character and a determined
              will. Her magic is based on knowledge and practice rather than raw
              power — and that’s what makes her unique. Over time, she learns to
              blend ancient traditions with new ideas, becoming a worthy heir to
              the witchcraft heritage of the Discworld.
            </p>
          </div>

          <QuoteCard>
            <div className={styles.quote_text_wrapper}>
              <p className={styles.text}>
                “What might be called the classical witch comes in two basic
                varieties, the complicated and the simple, or, to put it another
                way, the ones that have a room full of regalia and the ones that
                don`t. Magrat was by inclination one of the former sort. For
                example, take magical knives. She had a complete collection of
                magical knives, all with the appropriate colored handles and
                complicated runes all over them.
              </p>
              <p className={styles.text}>
                It had taken many years under the tutelage of Granny Weatherwax
                for Magrat to learn that the common kitchen breadknife was
                better than the most ornate of magic knives. It could do all
                that the magical knife could do, plus you could also use it to
                cut bread.”
              </p>
            </div>
            <img
              src="/svg/spinnwebe-6.svg"
              alt="spider web with spider"
              className={styles.spinnwebe}
            />
          </QuoteCard>
        </div>
      </article>
    </section>
  );
};
