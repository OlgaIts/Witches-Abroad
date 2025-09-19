import classNames from 'classnames';
import styles from './BookSection.module.scss';
import { Title } from '@/components/ui/Title';
import { Container } from '@/components/ui/Container';

interface BookSectionProps {
  className?: string;
}

export const BookSection = ({ className }: BookSectionProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Container>
        <Title tag="h2" size="lg" isCentered titleColor="accent">
          The Book
        </Title>

        <div className={styles.content}>
          <div>
            <p className={styles.text}>
              Fairy tales lie. Especially when witches start asking questions.
            </p>
            <p className={styles.text}>
              Cinderella's supposed to go to the ball, lose her slipper, and
              live happily ever after. That’s the story. But when a well-meaning
              fairy godmother tries to make it all go by the book, the witches
              of Lancre step in — and they don't read that kind of book. Granny
              Weatherwax (scary clever), Nanny Ogg (scandalously cheerful), and
              Magrat Garlick (earnest, hopeful, and heavily into crystals) are
              off on a mission to stop a story before it takes over. They don’t
              like fate. They don’t trust destiny. And they really don’t care
              for people who think they know how things “should” end. Because
              once a fairy tale gains too much momentum, it stops being magic —
              and starts being control.
            </p>
            <p className={styles.text}>
              Witches Abroad is a hilarious, subversive journey through twisted
              folklore, cultural misunderstandings, and the power of choosing
              your own path — even if you have to elbow a few glass slippers out
              of the way. It's not just fantasy. It’s Terry Pratchett:
              razor-sharp, laugh-out-loud funny, and sneakily wise in all the
              ways that matter.
            </p>
            <p className={styles.text}>
              And all of it unfolds in a world that runs not on logic, but on
              the logic of stories. Towers can be built out of pure narrative,
              and magic isn’t about power so much as knowing exactly when not to
              use it. At every turn, the witches run into fairy-tale clichés
              that refuse to die quietly: wicked stepmothers, talking mirrors,
              enchanted princes, and whole crowds of people desperate for
              something storified to happen to them. But Lancre witches don’t
              come to save the day — they come to sort things out. Because when
              the world starts dancing to someone else’s script, you need the
              kind of person who can stare it down and say: “Oh no you don’t.”
              This is a book about thinking for yourself — even if you happen to
              wear a pointy hat. And about how being a witch means not being
              afraid of other people’s stories — and never forgetting to tell
              your own
            </p>
          </div>
          <img
            src="/svg/book-section.svg"
            alt="Book with a hat"
            className={styles.img}
          />
        </div>
      </Container>
    </section>
  );
}
