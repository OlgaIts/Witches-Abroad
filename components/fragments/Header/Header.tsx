import { Btn } from '@/components/ui/Btn/Btn';
import { Button } from '../../ui/Button';
import { Container } from '../../ui/Container';
import { Nav } from '../../ui/Nav/Nav';
import { Title } from '../../ui/Title';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.component}>
      <Container>
        <Nav />
        <Title tag="h1" size="lg" className={styles.title} titleColor="light">
          Witches Abroad
        </Title>
        <p className={styles.text}>
          “It's a big responsibility, fairy godmothering. Knowing when to stop,
          I mean. People whose wishes get granted often don't turn out to be
          very nice people. So should you give them what they want — or what
          they need?”
        </p>
        <div className={styles.btn_wrapper}>
          <Btn className={styles.btn}>Buy Now</Btn>
          <Button btnStyle="outlined" className={styles.btn}>
            Download Free Sample
          </Button>
        </div>
      </Container>
    </header>
  );
};
