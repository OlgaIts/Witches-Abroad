import { Container } from '@/components/ui/Container';
import { Header } from '@/components/fragments/Header/Header';
import { AuthorSection } from '@/components/fragments/AuthorSection';
import { BookSection } from '@/components/fragments/BookSection';
import { Characters } from '@/components/fragments/Caracters/Characters';
import { SeriesSection } from '@/components/fragments/SeriesSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <AuthorSection />
          {/* <BookSection />
          <Characters /> */}
          <SeriesSection />
        </Container>
      </main>
    </>
  );
}
