import type { Metadata } from 'next';
import { Footer } from '@/components/fragments/Footer';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Witches Abroad — Fan Project | Terry Pratchett Discworld Tribute',
  description: 'Разработка и поддержка сайтов любой сложности',
  keywords: [
    'Terry Pratchett',
    'Discworld',
    'Witches Abroad',
    'fan project',
    'fan-made website',
    'UX/UI design',
    'Figma',
    'frontend',
    'portfolio project',
    'humorous website',
    'witches',
    'fantasy books',
  ],
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="layout">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
