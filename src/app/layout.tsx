import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FlashWeb - Sites Web Professionnels à 200€',
  description: 'FlashWeb crée des sites web professionnels et modernes pour votre entreprise à seulement 200€. Design responsive, optimisation SEO et performance garantie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}