'use client';

import React from 'react';
import './ComputerVisionHero.css';

interface ComputerVisionHeroProps {
  lang: 'ja' | 'en';
}

const ComputerVisionHero: React.FC<ComputerVisionHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'コンピュータビジョン',
      heading: '中小製造業のための',
      headingHighlight: 'AI品質検査統合ソリューション',
      description: 'Cognex、Keyence、OMRONなどの画像検査システムを、オープンソースAI（OpenCV、YOLO、TensorFlow）と統合。Solunaiは既存カメラ設備を活用し、マルチベンダーシステムを統合する「AIビジョン統合の専門家」です。',
      problemTitle: 'SME製造業の課題',
      problem: 'Cognex、Keyence などの専用画像検査システムは高額（1台300万円〜）で、各ベンダーのソフトウェアがバラバラ。検査データの統合管理が困難で、ベンダーロックインのリスクがあります。',
      solutionTitle: 'Solunaiの強み',
      solution: 'Solunaiは「AIビジョン統合スペシャリスト」として、既存のカメラ設備を最大限活用。NVIDIA GPU、Intel OpenVINO、最新のオープンソースAIモデルを組み合わせ、ベンダー独立型の品質検査システムを中小企業に手の届く価格で構築します。'
    },
    en: {
      badge: 'COMPUTER VISION',
      heading: 'AI Quality Inspection',
      headingHighlight: 'Built for SME Manufacturers',
      description: 'Integrate vision systems from Cognex, Keyence, and OMRON with open-source AI (OpenCV, YOLO, TensorFlow). Solunai is the integration specialist that leverages your existing camera infrastructure across multi-vendor systems.',
      problemTitle: 'The SME Challenge',
      problem: 'Proprietary vision systems from Cognex and Keyence are expensive (¥3M+ per unit) with fragmented vendor software. Consolidating inspection data is difficult, creating vendor lock-in risks.',
      solutionTitle: 'The Solunai Advantage',
      solution: 'Solunai positions as an "AI Vision Integration Specialist" — maximizing existing camera infrastructure. By combining NVIDIA GPUs, Intel OpenVINO, and cutting-edge open-source AI models, we deliver vendor-independent quality inspection at SME-accessible pricing.'
    }
  };

  const t = content[lang];

  return (
    <section className="computer-vision-hero">
      <div className="computer-vision-hero-container">
        <div className="computer-vision-hero-badge">{t.badge}</div>
        <h1 className="computer-vision-hero-heading">
          {t.heading}<br />
          <span className="computer-vision-hero-heading-highlight">{t.headingHighlight}</span>
        </h1>

        <div className="computer-vision-hero-columns">
          <div className="computer-vision-hero-column-left">
            <p>{t.description}</p>
          </div>

          <div className="computer-vision-hero-column-right">
            <div className="computer-vision-hero-image">
              <img
                src="/images/cards/computer_vision.jpg"
                alt={lang === 'ja' ? 'コンピュータビジョン - AI自動品質検査' : 'Computer Vision - AI Automated Quality Inspection'}
              />
            </div>
          </div>
        </div>

        <div className="computer-vision-hero-split">
          <div className="computer-vision-hero-problem">
            <h3 className="computer-vision-hero-split-title">{t.problemTitle}</h3>
            <p>{t.problem}</p>
          </div>
          <div className="computer-vision-hero-solution">
            <h3 className="computer-vision-hero-split-title">{t.solutionTitle}</h3>
            <p>{t.solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerVisionHero;
