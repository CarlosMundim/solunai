import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI + Global Engineers | Solunai - Complete Manufacturing Transformation Services',
  description: 'Deploy AI technology and world-class engineers in 2-6 weeks. 52x faster than traditional hiring, 30-40% cost reduction (¥35M-¥45M saved annually). WorldEmp partnership provides AI you cannot build + Engineers you cannot hire. €2.5M+ proven track record.',
  keywords: 'AI + Engineers, WorldEmp, global talent, manufacturing DX, cost reduction, machine learning engineers, computer vision, automation engineers, data scientists, manufacturing process engineers',
  openGraph: {
    title: 'AI + Global Engineers | Solunai',
    description: '2-6 week deployment, 30-40% cost reduction. AI you cannot build + Engineers you cannot hire.',
    type: 'website',
  },
};

export default function ServicesLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
