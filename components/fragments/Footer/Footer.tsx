import classNames from 'classnames';
import styles from './Footer.module.scss';
import { Title } from '@/components/ui/Title';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { LinkWithIcon } from '@/components/ui/LinkWithIcon';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classNames(styles.footer, className)}>
      <Container>
        <div className={styles.sections_wrapper}>
          <section className={styles.section}>
            <Title
              size="sm"
              tag="h3"
              titleColor="accent"
              className={styles.title}
            >
              About this project
            </Title>
            <p className={styles.about_text}>
              This website is a personal design project — an unofficial tribute
              to Terry Pratchett`s Discworld, created for educational and
              portfolio purposes only.
            </p>
            <p>
              No copyright infringement intended. All rights remain with the
              Pratchett Estate.
            </p>
          </section>

          <section className={styles.section}>
            <Title
              size="sm"
              tag="h3"
              titleColor="accent"
              className={styles.title}
            >
              Inspiration & Credits
            </Title>
            <div className={styles.content}>
              <p>Inspired by “Witches Abroad” by Terry Pratchett</p>
              <p>
                Discworld® and its characters belong to the Pratchett Estate
              </p>

              <LinkWithIcon
                href="https://terrypratchett.com/"
                linkText="Learn more"
                target="_blank"
                rel="noopener noreferrer"
              />
              <LinkWithIcon href="/credits" linkText="Credits" />
            </div>
          </section>

          <section className={styles.section}>
            <Title
              size="sm"
              tag="h3"
              titleColor="accent"
              className={styles.title}
            >
              Designer & Contact
            </Title>
            <div className={styles.content}>
              <p>Design & development by OlgaIts</p>
              <LinkWithIcon
                href=""
                linkText="Contact"
                target="_blank"
                rel="noopener noreferrer"
              />
              <LinkWithIcon
                href=""
                linkText="Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </section>
        </div>
        <p className={styles.text}>
          “This site runs on tea, magic, and suspicious clicking sounds.”
        </p>
      </Container>
    </footer>
  );
};
