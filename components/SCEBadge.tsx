'use client';

import React from 'react';
import './SCEBadge.css';

interface SCEBadgeProps {
  lang: 'ja' | 'en';
  variant?: 'light' | 'dark';
}

const SCEBadge: React.FC<SCEBadgeProps> = ({ lang, variant = 'dark' }) => {
  const content = {
    ja: {
      badge: 'SCE搭載',
      tooltip: 'Solunai Continuity Engine - 長期記憶と継続学習機能'
    },
    en: {
      badge: 'Powered by SCE',
      tooltip: 'Solunai Continuity Engine - Long-term memory and continuous learning'
    }
  };

  const currentContent = content[lang];

  return (
    <a href="/technology" className={`sce-badge ${variant}`} title={currentContent.tooltip}>
      <span className="sce-icon">◆</span>
      <span className="sce-text">{currentContent.badge}</span>
    </a>
  );
};

export default SCEBadge;
