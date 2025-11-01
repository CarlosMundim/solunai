import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社情報 | Solunai - デジタルツインで製造業変革',
  description: 'Solunai株式会社の企業概要、財務情報、認証、パートナーシップ。実証済みの技術と強固な財務基盤で日本の製造業デジタル化を推進。FBM Hudson €2.5M-€3.8M契約実績、ISO 27001/SOC 2認証取得。',
  keywords: '会社情報, 企業概要, 財務情報, 認証, ISO 27001, SOC 2, デジタルツイン, 製造業, Solunai',
  openGraph: {
    title: '会社情報 | Solunai株式会社',
    description: '実証済みの技術と強固な財務基盤。FBM Hudson €2.5M-€3.8M契約実績、ISO 27001/SOC 2認証取得。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
