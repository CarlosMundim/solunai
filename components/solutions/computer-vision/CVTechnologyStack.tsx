'use client';

import React from 'react';
import './CVTechnologyStack.css';

interface CVTechnologyStackProps {
  lang: 'ja' | 'en';
}

const CVTechnologyStack: React.FC<CVTechnologyStackProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'エンタープライズグレードのテクノロジーパートナー',
      subheading: '世界トップ企業の技術を統合した、信頼性の高いAI検査プラットフォーム',
      intro: 'Solunaiは、グローバルリーダー企業との技術提携により、中小製造業でも大手企業と同等の最先端AI・コンピュータビジョン技術を利用可能にします。',
      partners: [
        {
          name: 'GPUコンピューティング',
          category: '高速AI推論',
          description: '産業用GPUによる高速AI推論。リアルタイム画像処理を実現。',
          capabilities: [
            'AI推論速度: 0.3秒/画像',
            '3D可視化連携対応',
            '産業用エッジGPU対応'
          ]
        },
        {
          name: 'クラウドAI基盤',
          category: 'エンタープライズグレード',
          description: 'クラウドAI学習とデータ分析基盤。スケーラブルなインフラ。',
          capabilities: [
            'クラウドAIモデル学習',
            'IoT Edge対応',
            'セキュアなデータ管理'
          ]
        },
        {
          name: 'OpenCV',
          category: 'オープンソースビジョン',
          description: '世界標準のコンピュータビジョンライブラリ。カスタマイズ性と拡張性を保証。',
          capabilities: [
            '画像前処理・特徴抽出',
            'マルチカメラ対応',
            'リアルタイム処理最適化'
          ]
        },
        {
          name: 'エッジAI最適化',
          category: 'CPU/GPU推論',
          description: 'CPUでのAI推論高速化ツールキット。低コストな導入を実現。',
          capabilities: [
            'CPU推論の高速化',
            'モデルサイズ圧縮',
            '既存PCでのAI実行'
          ]
        },
        {
          name: 'PyTorch / TensorFlow',
          category: 'ディープラーニングフレームワーク',
          description: '業界標準のAIフレームワーク。最新の検出アルゴリズムを迅速に導入。',
          capabilities: [
            'カスタムAIモデル開発',
            '転移学習による短期間学習',
            '最新アルゴリズム対応'
          ]
        },
        {
          name: '産業用カメラ統合',
          category: 'マルチベンダー対応',
          description: '産業用カメラ大手メーカーとの統合。既存設備の活用が可能。',
          capabilities: [
            '既存カメラ資産の活用',
            '高解像度・高速撮影対応',
            '産業環境での耐久性'
          ]
        }
      ],
      standards: {
        heading: '国際標準準拠と相互運用性',
        description: 'ベンダーロックインを防ぎ、将来的な拡張性を保証',
        items: [
          {
            title: 'OPC UA 準拠',
            description: '産業用IoT通信の国際標準。あらゆるメーカーの設備と接続可能'
          },
          {
            title: 'ISA-95 データモデル',
            description: '製造業向け国際標準データモデル。MES/ERPとのシームレスな統合'
          },
          {
            title: 'ONNX モデル互換',
            description: 'AI業界標準フォーマット。他社AIモデルとの相互運用が可能'
          },
          {
            title: 'REST API 提供',
            description: '標準的なWeb API。既存システムとの連携が容易'
          }
        ]
      },
      benefits: {
        heading: 'テクノロジーパートナーシップがもたらすメリット',
        points: [
          {
            title: '技術的信頼性',
            description: 'グローバル大手企業の実績あるテクノロジーを基盤とした安定性'
          },
          {
            title: '継続的アップデート',
            description: 'パートナー企業の最新技術を常時取り込み、陳腐化を防止'
          },
          {
            title: 'ベンダーロックイン回避',
            description: 'オープンスタンダード採用により、システム移行の自由度を確保'
          },
          {
            title: 'グローバルサポート',
            description: 'パートナー企業のサポート体制を活用した安心の運用'
          }
        ]
      }
    },
    en: {
      heading: 'Enterprise-Grade Technology Partners',
      subheading: 'Reliable AI inspection platform integrating technology from world-leading companies',
      intro: 'Through partnerships with global technology leaders, Solunai enables SME manufacturers to access enterprise-grade AI and Computer Vision technology at accessible pricing.',
      partners: [
        {
          name: 'GPU Computing',
          category: 'High-Speed AI Inference',
          description: 'High-speed AI inference with industrial GPUs. Real-time image processing capability.',
          capabilities: [
            'AI inference speed: 0.3sec/image',
            '3D visualization integration ready',
            'Industrial edge GPU support'
          ]
        },
        {
          name: 'Cloud AI Platform',
          category: 'Enterprise-Grade',
          description: 'Cloud AI training and data analytics infrastructure. Scalable infrastructure.',
          capabilities: [
            'Cloud AI model training',
            'IoT Edge compatible',
            'Secure data management'
          ]
        },
        {
          name: 'OpenCV',
          category: 'Open-Source Vision',
          description: 'World-standard computer vision library. Guaranteed customizability and extensibility.',
          capabilities: [
            'Image preprocessing & feature extraction',
            'Multi-camera support',
            'Real-time processing optimization'
          ]
        },
        {
          name: 'Edge AI Optimization',
          category: 'CPU/GPU Inference',
          description: 'AI inference acceleration toolkit for CPUs. Enables low-cost deployment.',
          capabilities: [
            'CPU inference acceleration',
            'Model size compression',
            'AI execution on existing PCs'
          ]
        },
        {
          name: 'PyTorch / TensorFlow',
          category: 'Deep Learning Frameworks',
          description: 'Industry-standard AI frameworks. Rapid deployment of latest detection algorithms.',
          capabilities: [
            'Custom AI model development',
            'Short training via transfer learning',
            'Latest algorithm support'
          ]
        },
        {
          name: 'Industrial Camera Integration',
          category: 'Multi-Vendor Support',
          description: 'Integration with major industrial camera manufacturers. Leverage existing equipment.',
          capabilities: [
            'Utilize existing camera assets',
            'High resolution & high-speed capture',
            'Industrial environment durability'
          ]
        }
      ],
      standards: {
        heading: 'International Standards Compliance & Interoperability',
        description: 'Prevent vendor lock-in and guarantee future scalability',
        items: [
          {
            title: 'OPC UA Compliant',
            description: 'International standard for industrial IoT communication. Connect with any manufacturer\'s equipment'
          },
          {
            title: 'ISA-95 Data Model',
            description: 'International standard data model for manufacturing. Direct MES/ERP integration'
          },
          {
            title: 'ONNX Model Compatible',
            description: 'AI industry standard format. Interoperable with third-party AI models'
          },
          {
            title: 'REST API Provided',
            description: 'Standard Web API. Easy integration with existing systems'
          }
        ]
      },
      benefits: {
        heading: 'Benefits of Technology Partnerships',
        points: [
          {
            title: 'Technical Reliability',
            description: 'Stability built on proven technologies from global enterprises'
          },
          {
            title: 'Continuous Updates',
            description: 'Constantly incorporating partners\' latest technologies, preventing obsolescence'
          },
          {
            title: 'Vendor Lock-In Avoidance',
            description: 'Open standards adoption ensures system migration freedom'
          },
          {
            title: 'Global Support',
            description: 'Confident operations leveraging partners\' support networks'
          }
        ]
      }
    }
  };

  const t = content[lang];

  return (
    <section className="cv-technology-stack">
      <div className="cv-technology-stack-container">
        <h2 className="cv-technology-stack-heading">{t.heading}</h2>
        <p className="cv-technology-stack-subheading">{t.subheading}</p>
        <p className="cv-technology-stack-intro">{t.intro}</p>

        {/* Partners Grid */}
        <div className="partners-grid">
          {t.partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-placeholder">{partner.name}</div>
              <div className="partner-category">{partner.category}</div>
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
              <ul className="partner-capabilities">
                {partner.capabilities.map((capability, idx) => (
                  <li key={idx}>{capability}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Standards Section */}
        <div className="standards-section">
          <h3 className="section-heading">{t.standards.heading}</h3>
          <p className="section-description">{t.standards.description}</p>
          <div className="standards-grid">
            {t.standards.items.map((item, index) => (
              <div key={index} className="standard-card">
                <div className="standard-icon">✓</div>
                <h4 className="standard-title">{item.title}</h4>
                <p className="standard-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h3 className="section-heading">{t.benefits.heading}</h3>
          <div className="benefits-grid">
            {t.benefits.points.map((point, index) => (
              <div key={index} className="benefit-card">
                <h4 className="benefit-title">{point.title}</h4>
                <p className="benefit-description">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVTechnologyStack;
