import { Container } from '@/components/ui/Container';
import { CreditsHeader } from '@/components/fragments/CreditsHeader';
import { ArtworkSection } from '@/components/fragments/ArtworkSection';
import styles from './page.module.scss';
import { FontSection } from '@/components/fragments/FontSection';

export default function Credits() {
  return (
    <>
      <CreditsHeader />
      <Container>
        <ArtworkSection />
        <FontSection />
      </Container>
    </>
  );
}
