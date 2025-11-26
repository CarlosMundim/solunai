'use client';

import React from 'react';
import './ServicesTechStack.css';

interface ServicesTechStackProps {
  lang: 'ja' | 'en';
}

const ServicesTechStack: React.FC<ServicesTechStackProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'エンタープライズグレードプラットフォーム',
      subtitle: '業界をリードする技術スタック',
      technologies: [
        {
          name: 'デジタルツインエンジン',
          category: '3D可視化',
          description: 'リアルタイム3Dシミュレーションとデジタルツイン可視化',
          features: ['フォトリアリスティックレンダリング', 'リアルタイム協働', 'USD統合']
        },
        {
          name: '物理シミュレーション',
          category: 'CFD/FEA解析',
          description: 'デジタルツインのための高精度物理ベースシミュレーション',
          features: ['FEA/CFD解析', '予測モデリング', 'マルチフィジックス']
        },
        {
          name: 'クラウドインフラ',
          category: 'エンタープライズグレード',
          description: 'エンタープライズグレードクラウド、99.9% SLA保証',
          features: ['グローバルデータセンター', 'セキュリティ認証', '自動スケーリング']
        },
        {
          name: 'AIエンジン',
          category: 'AI & NLP',
          description: 'マルチモーダルAI、自然言語処理、インテリジェントオートメーション',
          features: ['アドバンスドNLP', 'マルチモーダルAI', 'エージェンシックシステム']
        },
        {
          name: 'カスタムMLモデル',
          category: '機械学習',
          description: 'TensorFlow、PyTorchで構築された製造特化MLモデル',
          features: ['予知保全', 'コンピュータビジョン', '品質予測']
        }
      ]
    },
    en: {
      title: 'Enterprise-Grade Platform',
      subtitle: 'Industry-Leading Technology Stack',
      technologies: [
        {
          name: 'Digital Twin Engine',
          category: '3D Visualization',
          description: 'Real-time 3D simulation and digital twin visualization',
          features: ['Photorealistic rendering', 'Real-time collaboration', 'USD integration']
        },
        {
          name: 'Physics Simulation',
          category: 'CFD/FEA Analysis',
          description: 'High-fidelity physics-based simulation for digital twins',
          features: ['FEA/CFD analysis', 'Predictive modeling', 'Multiphysics']
        },
        {
          name: 'Cloud Infrastructure',
          category: 'Enterprise-Grade',
          description: 'Enterprise-grade cloud with 99.9% SLA guarantee',
          features: ['Global data centers', 'Security certifications', 'Auto-scaling']
        },
        {
          name: 'AI Engine',
          category: 'AI & NLP',
          description: 'Multimodal AI, natural language processing, intelligent automation',
          features: ['Advanced NLP', 'Multimodal AI', 'Agentic systems']
        },
        {
          name: 'Custom ML Models',
          category: 'Machine Learning',
          description: 'Manufacturing-specific ML models built with TensorFlow, PyTorch',
          features: ['Predictive maintenance', 'Computer vision', 'Quality prediction']
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-tech-stack">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">{currentContent.title}</h2>
          <p className="tech-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="tech-grid">
          {currentContent.technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-card-header">
                <div className="tech-name">{tech.name}</div>
                <div className="tech-category">{tech.category}</div>
              </div>
              <p className="tech-description">{tech.description}</p>
              <div className="tech-features">
                {tech.features.map((feature, idx) => (
                  <span key={idx} className="feature-badge">{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTechStack;
