'use client';

import React from 'react';
import './CVKeyCapabilities.css';

interface CVKeyCapabilitiesProps {
  lang: 'ja' | 'en';
}

const CVKeyCapabilities: React.FC<CVKeyCapabilitiesProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '中小製造業のためのAIビジョン統合',
      subheading: '既存カメラを活用し、最新のAI技術で品質検査を自動化',
      capabilities: [
        {
          id: 'multi-camera',
          title: 'マルチカメラ・マルチベンダー統合',
          description: 'Cognex、Keyence、OMRON、Baslerなど、どのメーカーのカメラでも統合可能。既存の画像検査システムを入れ替えることなく、AIによる高度な分析機能を追加できます。'
        },
        {
          id: 'open-source-ai',
          title: '最新オープンソースAI活用',
          description: 'OpenCV、YOLO、TensorFlow、PyTorchなど、業界標準のAIフレームワークを活用。特定ベンダーのブラックボックスAIではなく、透明性の高いモデルで検査精度を継続的に改善できます。'
        },
        {
          id: 'existing-infrastructure',
          title: '既存設備の最大活用',
          description: '現在使用中のカメラ、照明、レンズをそのまま利用可能。新規設備投資を最小限に抑え、GPUサーバーとソフトウェアの追加だけで、AI検査システムを構築できます。'
        },
        {
          id: 'gpu-acceleration',
          title: 'GPU / エッジAI 対応',
          description: '産業用GPU（T4、A2000など）やエッジAI最適化による高速推論。コストを抑えながら、リアルタイムで複数カメラからの画像を同時処理できます。'
        },
        {
          id: 'defect-detection',
          title: '多様な欠陥検出',
          description: '傷、変色、異物混入、寸法不良、組立ミスなど、従来の画像処理では困難だった微細な欠陥も検出。学習データを増やすことで、精度を継続的に向上させることができます。'
        },
        {
          id: 'sme-training',
          title: '現場で使える実践的トレーニング',
          description: '専門知識がなくても、現場作業員がAIモデルの再学習や調整が可能。Solunaiが初期セットアップから運用定着まで、製造現場に寄り添ったサポートを提供します。'
        }
      ]
    },
    en: {
      heading: 'AI Vision Integration for SME Manufacturers',
      subheading: 'Leverage existing cameras with proven AI technology for automated quality inspection',
      capabilities: [
        {
          id: 'multi-camera',
          title: 'Multi-Camera, Multi-Vendor Integration',
          description: 'Works with cameras from any manufacturer — Cognex, Keyence, OMRON, Basler, and more. Add advanced AI analysis capabilities without replacing your existing vision systems.'
        },
        {
          id: 'open-source-ai',
          title: 'Production-Ready Open-Source AI',
          description: 'Leverages industry-standard AI frameworks like OpenCV, YOLO, TensorFlow, and PyTorch. Transparent, vendor-independent models allow continuous accuracy improvements without black-box dependencies.'
        },
        {
          id: 'existing-infrastructure',
          title: 'Maximize Existing Equipment',
          description: 'Reuse your current cameras, lighting, and lenses. Minimize new equipment investment — just add GPU servers and software to build a complete AI inspection system.'
        },
        {
          id: 'gpu-acceleration',
          title: 'GPU / Edge AI Support',
          description: 'High-speed inference using industrial GPUs (T4, A2000, etc.) or edge AI optimization. Cost-effective real-time processing of multiple camera feeds simultaneously.'
        },
        {
          id: 'defect-detection',
          title: 'Diverse Defect Detection',
          description: 'Detect scratches, discoloration, foreign objects, dimensional errors, assembly mistakes — even subtle defects difficult for traditional image processing. Continuously improve accuracy with more training data.'
        },
        {
          id: 'sme-training',
          title: 'Practical Shop Floor Training',
          description: 'No specialized expertise required — shop floor workers can retrain and adjust AI models. Solunai provides hands-on support from initial setup through operational stability on the manufacturing floor.'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="cv-key-capabilities">
      <div className="cv-key-capabilities-container">
        <h2 className="cv-key-capabilities-heading">{t.heading}</h2>
        <p className="cv-key-capabilities-subheading">{t.subheading}</p>

        <div className="cv-key-capabilities-grid">
          {t.capabilities.map((capability) => (
            <div key={capability.id} className="cv-capability-card">
              <h3 className="cv-capability-title">{capability.title}</h3>
              <p className="cv-capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVKeyCapabilities;
