import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Solunai - 完全な製造業デジタル変革 | Complete Manufacturing Transformation',
  description: 'デジタルツインから完全なEPC・製造サービスまで。世界クラスのエンジニア人材を数週間で配備。実証済みAIでコスト30-50%削減、品質95%改善。From digital twins to complete EPC and fabrication services. World-class engineering talent deployed in weeks.',
  keywords: 'AI, Manufacturing, Digital Transformation, Digital Twin, EPC, Engineering Services, 製造業, デジタル変革, AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
