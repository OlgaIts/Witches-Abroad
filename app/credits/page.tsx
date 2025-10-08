import { Container } from '@/components/ui/Container';
import { Nav } from '@/components/ui/Nav';
import { Title } from '@/components/ui/Title';
import styles from './page.module.scss';

export default function Credits() {
  return (
    <header className={styles.component}>
      <Container>
        <Nav />
        <div className={styles.wrapper}>
          <Title size="sm" tag="h1" titleColor="light" className={styles.title}>
            Credits - With Respect and Gratitude
          </Title>
          <p>
            This website uses visual and typographic assets sourced from
            generous creators across the web. I would like to express my sincere
            appreciation to the artists and designers whose work brings this
            project to life.
          </p>
        </div>
      </Container>
    </header>
  );
}
