'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './GlobalEngineeringProcess.css';

interface GlobalEngineeringProcessProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringProcess: React.FC<GlobalEngineeringProcessProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const content = {
    ja: {
      title: 'エンジニア配備プロセス',
      subtitle: '要件から開始まで',
      phases: [
        {
          number: '01',
          title: '要件定義',
          duration: '1-2日',
          description: 'プロジェクトのニーズ、スキル要件、文化的適合性を特定',
          deliverables: [
            '詳細なスキルマトリックス',
            'プロジェクトスコープ定義',
            '文化的要件',
            '予算とタイムライン'
          ]
        },
        {
          number: '02',
          title: '人材マッチング',
          duration: '3-5日',
          description: 'WorldEmpグローバル人材プールからAIベースのマッチング',
          deliverables: [
            'マッチした候補者プロフィール',
            'スキル評価レポート',
            '経験検証',
            '文化的適合性評価'
          ]
        },
        {
          number: '03',
          title: '面接と選考',
          duration: '5-7日',
          description: '候補者面接、技術評価、最終選考',
          deliverables: [
            '面接スケジュール',
            '技術評価結果',
            '参照チェック',
            'オファー交渉'
          ]
        },
        {
          number: '04',
          title: 'オンボーディング',
          duration: '1-2週間',
          description: 'ビザ、住居、トレーニング、文化的統合',
          deliverables: [
            'ビザ・就労許可',
            '住居手配',
            'オリエンテーションプログラム',
            '日本語サポート'
          ]
        },
        {
          number: '05',
          title: '継続的サポート',
          duration: '継続中',
          description: '進行中のパフォーマンス管理とサポート',
          deliverables: [
            'パフォーマンスモニタリング',
            '文化的統合サポート',
            'キャリア開発',
            'プロジェクト調整'
          ]
        }
      ]
    },
    en: {
      title: 'Engineer Deployment Process',
      subtitle: 'From Requirements to Start',
      phases: [
        {
          number: '01',
          title: 'Requirements Definition',
          duration: '1-2 Days',
          description: 'Identify project needs, skill requirements, and cultural fit',
          deliverables: [
            'Detailed skill matrix',
            'Project scope definition',
            'Cultural requirements',
            'Budget and timeline'
          ]
        },
        {
          number: '02',
          title: 'Talent Matching',
          duration: '3-5 Days',
          description: 'AI-based matching from WorldEmp global talent pool',
          deliverables: [
            'Matched candidate profiles',
            'Skill assessment reports',
            'Experience verification',
            'Cultural fit evaluation'
          ]
        },
        {
          number: '03',
          title: 'Interview & Selection',
          duration: '5-7 Days',
          description: 'Candidate interviews, technical evaluation, final selection',
          deliverables: [
            'Interview schedule',
            'Technical assessment results',
            'Reference checks',
            'Offer negotiation'
          ]
        },
        {
          number: '04',
          title: 'Onboarding',
          duration: '1-2 Weeks',
          description: 'Visa, housing, training, and cultural integration',
          deliverables: [
            'Visa & work permits',
            'Housing arrangement',
            'Orientation program',
            'Japanese language support'
          ]
        },
        {
          number: '05',
          title: 'Ongoing Support',
          duration: 'Continuous',
          description: 'Ongoing performance management and support',
          deliverables: [
            'Performance monitoring',
            'Cultural integration support',
            'Career development',
            'Project alignment'
          ]
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="global-engineering-process" ref={containerRef}>
      <div className="process-header">
        <h2 className="process-title">{currentContent.title}</h2>
        <p className="process-subtitle">{currentContent.subtitle}</p>
      </div>

      <div className="phases-timeline">
        {currentContent.phases.map((phase, index) => {
          const totalCards = currentContent.phases.length;
          const cardProgress = useTransform(
            scrollYProgress,
            [index / totalCards, (index + 1) / totalCards],
            [0, 1]
          );

          const scale = useTransform(cardProgress, [0, 1], [1, 0.95]);
          const opacity = useTransform(cardProgress, [0, 0.5, 1], [1, 1, 1]);
          const y = useTransform(cardProgress, [0, 1], ['0%', '-5%']);

          return (
            <motion.div
              key={index}
              className="phase-card-wrapper"
              style={{
                scale,
                opacity,
                y,
                position: 'sticky',
                top: 0,
                height: '100vh'
              }}
            >
              <div className="phase-card">
                <div className="phase-number">{phase.number}</div>
                <div className="phase-content">
                  <div className="phase-header">
                    <h3 className="phase-title">{phase.title}</h3>
                    <span className="phase-duration">{phase.duration}</span>
                  </div>
                  <p className="phase-description">{phase.description}</p>
                  <div className="phase-deliverables">
                    <h4 className="deliverables-title">
                      {lang === 'ja' ? '成果物:' : 'Deliverables:'}
                    </h4>
                    <ul className="deliverables-list">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="deliverable-item">
                          <svg className="deliverable-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GlobalEngineeringProcess;
