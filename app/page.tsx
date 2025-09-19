import { Container } from '@/components/ui/Container';
import { Header } from '@/components/fragments/Header/Header';
import { AuthorSection } from '@/components/fragments/AuthorSection';
import { BookSection } from '@/components/fragments/BookSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <AuthorSection />
          <BookSection />
        </Container>
      </main>
    </>
  );
}
