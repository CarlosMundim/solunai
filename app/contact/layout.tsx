import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | Solunai株式会社',
  description: '製造業の変革を始めましょう。無料60分コンサルテーションで、あなたの製造現場の課題を解決します。ISO 27001認証、24時間以内に返信保証。',
  keywords: 'お問い合わせ, 無料相談, 製造業DX, AI導入, 予知保全, 品質管理, 見積自動化',
  openGraph: {
    title: 'お問い合わせ | Solunai株式会社',
    description: '製造業の変革を始めましょう。無料60分コンサルテーションで課題を解決。',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
