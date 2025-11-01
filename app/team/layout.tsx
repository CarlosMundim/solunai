import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '私たちのチーム | Solunai - 60年以上の製造業リーダーシップ',
  description: 'Carlos Mundim（30年の製造エンジニアリング、52倍成長実績）と古屋知夫（25年の日本製造業、¥120億円以上のエグジット実績）によるグローバルリーダーシップ。AI技術とグローバルエンジニアリングエクセレンスで日本の製造業を変革。',
  keywords: '製造業リーダーシップ, CTO, CEO, 製造エンジニアリング, エグジット実績, AI製造業, デジタルツイン, 日本製造業DX',
  openGraph: {
    title: '私たちのチーム | Solunai',
    description: '60年以上の統合製造業経験。52倍成長実績と¥120億円以上のエグジット・ポートフォリオ。',
    type: 'website',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
