'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { Container } from '@/components/ui/Container';
import { Title } from '@/components/ui/Title';
import styles from './ArtworkSection.module.scss';

interface ArtworkSectionProps {
  className?: string;
}

export const ArtworkSection = ({ className }: ArtworkSectionProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Container>
        <Title size="lg" tag="h2" titleColor="accent" isCentered>
          Illustrations & Artwork
        </Title>
        <div className={styles.wrapper}>
          <ul className={styles.list} role="list">
            <li className={styles.list_item}>
              The main character illustrations (the witches) were created by
              <Link
                href="https://pontpilat.taplink.ws/"
                className={styles.link}
              >
                Anton Alexandrov
              </Link>
            </li>

            <li className={styles.list_item}>
              The witches' sabbath scene was originally found on
              <Link
                href="https://diskworld.reactor.cc/tag/%D0%9B%D0%B0%D0%BD%D0%BA%D1%80%D1%81%D0%BA%D0%B8%D0%B5+%D0%B2%D0%B5%D0%B4%D1%8C%D0%BC%D1%8B"
                className={styles.link}
              >
                Diskworld.Reactor
              </Link>
              forum, shared by user darth_vader\m/. If you know the original
              artist, please let me know so I can credit properly.
            </li>

            <li className={styles.list_item}>
              Vector graphics were sourced from{' '}
              <Link className={styles.link} href="https://www.freepik.com/">
                Freepik
              </Link>
              , used under Freepik`s free license:
              <ul role="list">
                <li className={styles.sub_item}>by @freepik</li>
                <li className={styles.sub_item}>by @macrovector</li>
                <li className={styles.sub_item}>by @pikisuperstar</li>
                <li className={styles.sub_item}>by @pch.vector</li>
                <li className={styles.sub_item}>by @storyset</li>
                <li className={styles.sub_item}>by @brgfx</li>
              </ul>
            </li>

            <li className={styles.list_item}>
              Book cover images are from the official
              <Link
                className={styles.link}
                href="https://www.terrypratchettbooks.com/"
              >
                Discworld site
              </Link>
            </li>
          </ul>
          <img src="/svg/cat.svg" alt="cat icon" />
        </div>
      </Container>
    </section>
  );
};
