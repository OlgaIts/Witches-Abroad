import Link from 'next/link';
import classNames from 'classnames';
import { Container } from '@/components/ui/Container';
import { LinkWithIcon } from '@/components/ui/LinkWithIcon';
import { Title } from '@/components/ui/Title';
import styles from './AuthorSection.module.scss';

interface AuthorSectionProps {
  className?: string;
}

export const AuthorSection = ({ className }: AuthorSectionProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Container>
        <Title tag="h2" size="lg" isCentered titleColor="accent">
          The Author
        </Title>
        <div className={styles.content}>
          <img
            src="/img/author.png"
            className={styles.img}
            alt="Terry Pratchett"
          />
          <div>
            <p className={styles.text}>
              Terry Pratchett is one of the most beloved and widely read English
              authors of our time. With millions of copies sold, his books have
              become a cornerstone of modern fantasy literature. Without the
              Discworld — the vast, bizarre, and hilarious universe he imagined
              — the fantasy genre simply wouldn't be the same. If you appreciate
              stories that are sharp, ironic, profoundly wise, and unafraid to
              tackle the pressing issues of our world through satire and
              imagination, then Pratchett`s work is essential reading. He was a
              master of weaving together dry wit, emotional depth, and
              razor-sharp social commentary — often in a single sentence. His
              novels explore the full spectrum of human experience, from
              politics and religion to love, death, and the absurdity of
              bureaucracy. At the same time, they remain warm, humane, and
              irresistibly funny. Pratchett didn`t just write fantasy — he held
              up a mirror to our world, dressed it in wizard robes, and made it
              dance. That`s why his books aren`t just read — they`re re-read,
              cherished, and passed from one generation of readers to the next.
              In a genre often driven by escapism, Pratchett`s stories bring us
              back to reality — wiser, laughing, and thinking a little more
              deeply.
            </p>
            <LinkWithIcon
              className={styles.link}
              href="https://terrypratchett.com/"
              linkText="Read more"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
