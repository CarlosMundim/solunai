'use client';

import React from 'react';
import './AIImplementationTech.css';

interface AIImplementationTechProps {
  lang: 'ja' | 'en';
}

const AIImplementationTech: React.FC<AIImplementationTechProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'テクノロジースタック & 機能',
      subtitle: 'エンタープライズグレードのAIツールとプラットフォーム',
      categories: [
        {
          title: 'Machine Learning',
          technologies: [
            { name: 'TensorFlow', description: 'ディープラーニングフレームワーク' },
            { name: 'PyTorch', description: 'ニューラルネットワーク構築' },
            { name: 'Scikit-learn', description: '古典的なMLアルゴリズム' },
            { name: 'XGBoost', description: '予測モデリング' }
          ]
        },
        {
          title: 'Computer Vision',
          technologies: [
            { name: 'OpenCV', description: 'リアルタイム画像処理' },
            { name: 'YOLO', description: '物体検出' },
            { name: 'Detectron2', description: 'インスタンスセグメンテーション' },
            { name: 'Custom CNN', description: '欠陥検出モデル' }
          ]
        },
        {
          title: 'Data & Analytics',
          technologies: [
            { name: 'PostgreSQL', description: 'リレーショナルデータベース' },
            { name: 'TimescaleDB', description: '時系列データ' },
            { name: 'Apache Kafka', description: 'リアルタイムストリーミング' },
            { name: 'Power BI', description: 'ビジネスインテリジェンス' }
          ]
        },
        {
          title: 'Infrastructure',
          technologies: [
            { name: 'AWS / Azure', description: 'クラウドインフラ' },
            { name: 'Docker', description: 'コンテナ化' },
            { name: 'Kubernetes', description: 'オーケストレーション' },
            { name: 'MLflow', description: 'モデル管理' }
          ]
        }
      ]
    },
    en: {
      title: 'Technology Stack & Capabilities',
      subtitle: 'Enterprise-Grade AI Tools and Platforms',
      categories: [
        {
          title: 'Machine Learning',
          technologies: [
            { name: 'TensorFlow', description: 'Deep learning framework' },
            { name: 'PyTorch', description: 'Neural network building' },
            { name: 'Scikit-learn', description: 'Classical ML algorithms' },
            { name: 'XGBoost', description: 'Predictive modeling' }
          ]
        },
        {
          title: 'Computer Vision',
          technologies: [
            { name: 'OpenCV', description: 'Real-time image processing' },
            { name: 'YOLO', description: 'Object detection' },
            { name: 'Detectron2', description: 'Instance segmentation' },
            { name: 'Custom CNN', description: 'Defect detection models' }
          ]
        },
        {
          title: 'Data & Analytics',
          technologies: [
            { name: 'PostgreSQL', description: 'Relational database' },
            { name: 'TimescaleDB', description: 'Time-series data' },
            { name: 'Apache Kafka', description: 'Real-time streaming' },
            { name: 'Power BI', description: 'Business intelligence' }
          ]
        },
        {
          title: 'Infrastructure',
          technologies: [
            { name: 'AWS / Azure', description: 'Cloud infrastructure' },
            { name: 'Docker', description: 'Containerization' },
            { name: 'Kubernetes', description: 'Orchestration' },
            { name: 'MLflow', description: 'Model management' }
          ]
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="ai-implementation-tech">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">{currentContent.title}</h2>
          <p className="tech-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="tech-categories">
          {currentContent.categories.map((category, index) => (
            <div key={index} className="tech-category-card">
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="technologies-list">
                {category.technologies.map((tech, idx) => (
                  <div key={idx} className="tech-item">
                    <div className="tech-name">{tech.name}</div>
                    <div className="tech-description">{tech.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIImplementationTech;
