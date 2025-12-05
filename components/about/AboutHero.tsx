'use client';

import React from 'react';
import Image from 'next/image';

interface AboutHeroProps {
  lang: 'ja' | 'en';
}

const AboutHero: React.FC<AboutHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'ソルナイについて',
      subtitle: '静かに、確実に。現場に寄り添うAIを。',
      description: 'ソルナイ株式会社は、日本の職場文化を理解し、誤解を生まない「静かなAI」を開発する企業です。',
    },
    en: {
      title: 'About Solunai',
      subtitle: 'Quiet, dependable AI for real workplaces.',
      description: 'Solunai builds AI that fits Japanese communication and work culture, supporting people gently without disruption.',
    },
  };

  const text = content[lang];

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Solunai Office"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-center px-6 py-20 md:px-8 lg:px-12">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl" style={{ lineHeight: '1.3' }}>
            {text.title}
          </h1>
          <p className="mt-4 text-xl font-medium text-neutral-800 md:text-2xl" style={{ lineHeight: '1.5' }}>
            {text.subtitle}
          </p>
          <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            {text.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
