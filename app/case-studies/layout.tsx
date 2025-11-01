export const metadata = {
  title: '導入事例 - Solunai | €2.5M-€3.8M グローバル製造業デジタル変革実績',
  description: 'FBM Hudson Italiana（イタリア・84年の歴史を持つ熱設備メーカー）のデジタル変革実績。€2.5M-€3.8M契約規模、178-295% IRR、4-7ヶ月投資回収。AI見積プラットフォーム、デジタルツイン、エージェント型AIシステム、自律製造で製造業を根本から変革。見積時間90%削減、欠陥検出95%、設備稼働率95%達成。',
  keywords: '導入事例, デジタル変革, AI製造, FBM Hudson, 熱設備, ROI, €2.5M, デジタルツイン, NVIDIA Omniverse, ANSYS, Azure',
  openGraph: {
    title: '導入事例 - Solunai | €2.5M+ グローバル製造業デジタル変革',
    description: '84年の歴史を持つイタリア熱設備メーカーのデジタル変革。178-295% IRR、4-7ヶ月投資回収、年間€5.35M-€8.85M効果。',
    type: 'website',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
