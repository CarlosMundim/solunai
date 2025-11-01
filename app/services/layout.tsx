import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI + グローバルエンジニア | Solunai - 完全な製造業変革サービス',
  description: 'AI技術と世界クラスのエンジニアを2-6週間で配備。従来採用の52倍速、30-40%のコスト削減（年間¥35M-¥45M節約）。WorldEmpパートナーシップで、構築できないAI + 採用できないエンジニアを提供。€2.5M+実証済み。',
  keywords: 'AI + エンジニア, WorldEmp, グローバル人材, 製造業DX, コスト削減, 機械学習エンジニア, コンピュータビジョン, 自動化エンジニア, データサイエンティスト, 製造プロセスエンジニア',
  openGraph: {
    title: 'AI + グローバルエンジニア | Solunai',
    description: '2-6週間配備、30-40%コスト削減。構築できないAI + 採用できないエンジニア。',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
