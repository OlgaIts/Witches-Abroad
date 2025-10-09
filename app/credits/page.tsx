import { CreditsHeader } from '@/components/fragments/CreditsHeader';
import { ArtworkSection } from '@/components/fragments/ArtworkSection';
import styles from './page.module.scss';

export default function Credits() {
  return (
    <>
      <CreditsHeader />
      <ArtworkSection />
    </>
  );
}
