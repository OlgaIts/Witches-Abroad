import { Container } from '@/components/ui/Container';
import { Header } from '@/components/fragments/Header/Header';
import { AuthorSection } from '@/components/fragments/AuthorSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <AuthorSection />
        </Container>
      </main>
    </>
  );
}
