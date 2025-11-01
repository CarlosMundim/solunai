import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Solunai - 60+ Years Manufacturing Leadership',
  description: 'Global leadership with Carlos Mundim (30 years manufacturing engineering, 52× growth achievement) and Tomoo Furuya (25 years Japanese manufacturing, ¥12B+ exit portfolio). Transforming Japanese manufacturing with AI technology and global engineering excellence.',
  keywords: 'manufacturing leadership, CTO, CEO, manufacturing engineering, exit portfolio, AI manufacturing, digital twin, Japanese manufacturing DX',
  openGraph: {
    title: 'Our Team | Solunai',
    description: '60+ years combined manufacturing experience. 52× growth achievement and ¥12B+ exit portfolio.',
    type: 'website',
  },
};

export default function TeamLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
